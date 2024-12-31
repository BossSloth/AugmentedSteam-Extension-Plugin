import "./browser";
// import { getLang } from './browser';
import {getNeededScripts} from "./script-loading";
import {DEV, getCdn, initCdn, Logger, LOOPBACK_CDN} from "./shared";
import {createFakeSteamHeader} from "./header";
import {Millennium} from "@steambrew/webkit";
import {injectPreferences} from "./preferences";

async function loadScript(src: string) {
    let content = await fetch(src).then((response) => response.text());
    content = content
        .replaceAll("chrome", "augmentedBrowser")
        .replaceAll("clients", "augmentedBrowser.clients");
    content += "\n//# sourceURL=" + src;

    return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        // script.src = src;
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = content;
        script.setAttribute("original-src", src);

        script.onload = () => resolve();

        script.onerror = () => reject(new Error("Failed to load script"));

        document.head.appendChild(script);
        resolve();
    });
}

async function loadStyle(src: string) {
    let content = await fetch(src).then((response) => response.text());
    content = content.replaceAll("chrome-extension://__MSG_@@extension_id__", LOOPBACK_CDN,);

    return new Promise<void>((resolve, reject) => {
        const style = document.createElement("style");
        style.setAttribute("original-src", src);
        style.innerHTML = content;

        style.onload = () => resolve();

        style.onerror = () => reject(new Error("Failed to load style"));

        document.head.appendChild(style);
    });
}

async function loadJsScripts(scripts: string[]) {
    const promises = [];
    for (const script of scripts.filter((script) => script.includes(".js"))) {
        promises.push(loadScript(getCdn(script)));
    }

    return Promise.all(promises);
}

function loadCssScripts(scripts: string[]) {
    const promises = [];
    for (const style of scripts.filter((script) => script.includes(".css"))) {
        promises.push(loadStyle(getCdn(style)));
    }

    return Promise.all(promises);
}

const startTime = performance.now();

async function testPerformance() {
    await Millennium.findElement(document, ".es_highlighted_owned");

    Logger.Log(`Took Augmented Steam ${performance.now() - startTime}ms to load`);

    if (DEV) {
        //@ts-ignore
        window.reset = reset;

        const prevTime = localStorage.getItem("time") ?? 0;
        localStorage.setItem("time", (performance.now() - startTime + Number(prevTime)).toString(),);
        const prevCounter = localStorage.getItem("counter") ?? 0;
        localStorage.setItem("counter", (Number(prevCounter) + 1).toString());
        Logger.Log(`Avg: ${Number(localStorage.getItem("time")) / Number(localStorage.getItem("counter"))}`,);
    }
}

function reset() {
    localStorage.removeItem("time");
    localStorage.removeItem("counter");
}

export default async function WebkitMain() {
    const href = window.location.href;

    if (href.includes("isthereanydeal.com")) {
        await Millennium.findElement(document, ".error-message");
        // Page errored, do a force reload
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    if (!href.includes("https://store.steampowered.com") && !href.includes("https://steamcommunity.com")) return;


    testPerformance();

    // Log all await calls
    // const originalThen = Promise.prototype.then;

    // Promise.prototype.then = function (onFulfilled, onRejected) {
    //     const stack = new Error().stack;
    //     console.log("Await called:", stack);
    //     return originalThen.call(this, onFulfilled, onRejected);
    // };

    Logger.Log("plugin is running");

    await createFakeSteamHeader();

    await initCdn();

    const scripts = getNeededScripts();

    await Promise.all([loadCssScripts(scripts), loadScript(getCdn("js/background.js")), loadScript(getCdn("js/offscreen_domparser.js")),]);

    await loadJsScripts(scripts);

    if (window.location.href.includes("https://store.steampowered.com/account")) injectPreferences();
}
