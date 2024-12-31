import {callable} from "@steambrew/webkit";
import {getCdn, getLoopbackCdn, Logger, VERSION} from "./shared";

// In this file we emulate the extension browser api for the Augmented Steam extension

window.augmentedBrowser = {};
let augmentedBrowser = window.augmentedBrowser;

//#region Defaults

augmentedBrowser = {
    ...augmentedBrowser, runtime: {
        getManifest: () => {
            return {version: VERSION};
        }, id: "kdbmhfkmnlmbkgbabkdealhhbfhlmmon", // Chrome
        onInstalled: {
            addListener: () => {
            },
        }, onStartup: {
            addListener: () => {
            },
        },
    }, contextMenus: {
        onClicked: {
            addListener: () => {
            }, hasListener: () => {
            },
        },
    }
}

//#endregion

//#region Storage

const SYNC_STORAGE_KEY = "augmented-options-sync";
const LOCAL_STORAGE_KEY = "augmented-options-local";

augmentedBrowser.storage = {
    sync: {},
};

async function StorageGet(storageKey: string, items?: string | string[] | Record<string, any>, callback?: Function,): Promise<any> {
    const storedData = localStorage.getItem(storageKey);
    const result: Record<string, any> = {};
    let parsedData: Record<string, any> = {};

    try {
        parsedData = storedData ? JSON.parse(storedData) : {};
    } catch (e) {
        throw new Error(`failed to parse JSON for ${storageKey}`);
    }

    if (typeof items === "string") items = [items];

    if (Array.isArray(items)) {
        items.forEach((key) => {
            if (key in parsedData) {
                result[key] = parsedData[key];
            }
        });
    } else if (typeof items === "object") {
        for (const key in items) {
            result[key] = key in parsedData ? parsedData[key] : items[key];
        }
    }

    if (callback) callback(result);

    return result;
}

async function StorageSet(storageKey: string, item: Record<string, any>, callback?: Function,) {
    const storedData = localStorage.getItem(storageKey);
    let parsedData: Record<string, any> = {};

    try {
        parsedData = JSON.parse(storedData || "{}");
    } catch (e) {
        throw new Error(`failed to parse JSON for ${storageKey}`);
    }

    Object.assign(parsedData, item);
    localStorage.setItem(storageKey, JSON.stringify(parsedData));

    if (callback) callback();
}

async function StorageRemove(storageKey: string, key: string | string[], callback?: Function,) {
    const storedData = localStorage.getItem(storageKey);
    let parsedData: Record<string, any> = {};

    try {
        parsedData = JSON.parse(storedData || "{}");
    } catch (e) {
        throw new Error(`failed to parse JSON for ${storageKey}`);
    }

    if (!Array.isArray(key)) key = [key];

    key.forEach((k) => {
        delete parsedData[k];
    });

    localStorage.setItem(storageKey, JSON.stringify(parsedData));

    if (callback) callback();
}

augmentedBrowser.storage = {
    ...augmentedBrowser.storage, sync: {
        get: (items?: any, callback?: Function) => StorageGet(SYNC_STORAGE_KEY, items, callback),
        set: (item: any, callback?: Function) => StorageSet(SYNC_STORAGE_KEY, item, callback),
        remove: (key: any, callback?: Function) => StorageRemove(SYNC_STORAGE_KEY, key, callback),
    }, local: {
        get: (items?: any, callback?: Function) => StorageGet(LOCAL_STORAGE_KEY, items, callback),
        set: (item: any, callback?: Function) => StorageSet(LOCAL_STORAGE_KEY, item, callback),
        remove: (key: any, callback?: Function) => StorageRemove(LOCAL_STORAGE_KEY, key, callback),
    }
}

//#endregion

//#region fake fetch
const oldFetch = window.fetch;

const interceptedUrls: RegExp[] = [/steamcommunity\.com\/id/, /steamcommunity\.com\/profiles\/\d+\/$/, /steamcommunity\.com\/profiles\/\d+\/ajaxgetbadgeinfo/, /steamcommunity\.com\/inventory\//, /store\.steampowered\.com\/steamaccount\/addfunds/,];

const backendFetch = callable<[{ url: string }], string>("BackendFetch");

type BackendResponse = {
    ok: boolean; status: number; url: string; headers: Record<string, string>; body: string;
};

window.fetch = async (url: string | URL | Request, params?: RequestInit,): Promise<Response> => {
    for (const intercept of interceptedUrls) {
        if (url.toString().match(intercept)) {
            Logger.Debug(`intercepting ${url}`);
            if (params) {
                //TODO: Handle credentials params
                Logger.Warn("fetch params not supported", params);
            }
            const response = JSON.parse(await backendFetch({url: url.toString()}),) as BackendResponse;

            const responseObject = new Response(response.body, {
                status: response.status, headers: response.headers,
            });
            Object.defineProperty(responseObject, "url", {value: response.url});
            return responseObject;
        }
    }

    return oldFetch(url, params);
};
//#endregion

//#region getResourceUrl
augmentedBrowser.runtime.getURL = (res: string) => res.endsWith(".png") || res.endsWith(".svg") ? getLoopbackCdn(res) : getCdn(res);
//#endregion

//#region Background messaging
augmentedBrowser = {
    ...augmentedBrowser, clients: {
        matchAll: () => [{url: "html/offscreen_domparser.html"}],
    }, offscreen: {
        closeDocument: () => {
        },
    }
}
type MessageCallback = (message: any, sender: any, sendResponse: (response: any) => void,) => void;

const messageListeners: MessageCallback[] = [];

augmentedBrowser.runtime = {
    ...augmentedBrowser.runtime, onMessage: {
        addListener: (callback: MessageCallback) => messageListeners.push(callback),
    }, sendMessage: (message: any, callback?: (response: any) => void) => {
        Logger.Debug("Sending message", message);
        messageListeners.forEach((listener) => {
            listener(message, {tab: {}}, (response: any) => {
                if (callback) {
                    callback(response);
                }
            });
        });
    },
};

//#endregion

//#region open newly created <a> tags in own way
const oldCreateElement = document.createElement.bind(document);

// TODO: maybe make this an option
const externalLinks = ["twitch.tv", "youtube.com", "google.com", "astats.nl", "steamrep.com", "steamgifts.com", "steamtrades.com", "barter.vg", "achievementstats.com", "backpack.tf", "steamcardexchange.net", "augmentedsteam.com",];
const popupLinks = ["steamdb.info", "isthereanydeal.com", "howlongtobeat.com", "pcgamingwiki.com",];
const EXTERNAL_PROTOCOL = "steam://openurl_external/";

function modifyHrefForExternalLinks(tag: HTMLAnchorElement): void {
    externalLinks.forEach((link) => {
        if (tag.href.includes(link)) {
            tag.href = EXTERNAL_PROTOCOL + tag.href;
        }
    });
}

function addPopupClickListener(tag: HTMLAnchorElement): void {
    popupLinks.forEach((link) => {
        if (tag.href.includes(link)) tag.onclick = (event) => {
            if (event.ctrlKey) return;

            event.preventDefault();

            const ctrlClickEvent = new MouseEvent("click", {
                bubbles: true, cancelable: true, view: window, ctrlKey: true,
            });

            tag.dispatchEvent(ctrlClickEvent);
        };
    });
}

function observeAnchorTag(tag: HTMLAnchorElement): void {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "href") {
                modifyHrefForExternalLinks(tag);
                addPopupClickListener(tag);
                observer.disconnect();
            }
        });
    });

    observer.observe(tag, {attributes: true});
}

document.createElement = function (tagName: string, options?: ElementCreationOptions,) {
    const tag: HTMLAnchorElement = oldCreateElement(tagName, options);

    if (tagName.toLowerCase() === "a") observeAnchorTag(tag);

    return tag;
};
//#endregion
