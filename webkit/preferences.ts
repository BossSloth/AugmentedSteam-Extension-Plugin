import {getCdn, getLoopbackCdn} from "./shared";
import {Millennium} from "@steambrew/webkit";

export function injectPreferences() {
    const sidebarContainer = document.querySelector(".two_column.left");
    const mainContainer = document.querySelector(".two_column.right");

    const augmentedSteamOptions = Object.assign(document.createElement("div"), {
        style: {cursor: "pointer"},
        innerHTML: `<img class="ico16" src="${getLoopbackCdn("img/logo/as48.png")}" alt="logo"> <span>Augmented Steam</span>`,
        class: "nav_item"
    });

    sidebarContainer.appendChild(augmentedSteamOptions);

    augmentedSteamOptions.addEventListener("click", async () => {
        sidebarContainer.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        });
        augmentedSteamOptions.classList.toggle("active");

        const url = new URL(window.location.href);
        url.search = ""; // Removes all searchParams from the URL
        url.searchParams.set("augmented-steam", "true");
        window.history.replaceState({}, "", url.href);

        const optionsHtml = (await (await fetch(`${getLoopbackCdn("html/options.html")}`)).text()).replace('<base target="_blank">', "");
        mainContainer.innerHTML = warningHTML + optionsHtml;

        await Promise.all([loadStyle(), loadScript()]);

        document.dispatchEvent(new Event("initAugmentedSteamOptions"));

        const button = (await Millennium.findElement(document, ".buttons.svelte-1nzirk3"))[0];
        const clearCacheButton = Object.assign(document.createElement("button"), {
            onclick: () => {
                if (window.confirm("Are you sure you want to clear the cache?")) {
                    window.augmentedBrowser.runtime.sendMessage({ action: "cache.clear" }, () => {
                        window.location.reload();
                    });
                }
            },
        });

        const span = Object.assign(document.createElement("span"), {
            dataset: {tooltipText: "This may fix some issues with the plugin."}, innerText: "Clear cache",
        });

        clearCacheButton.appendChild(span);

        button.appendChild(clearCacheButton);
    });

    if (new URL(window.location.href).searchParams.get("augmented-steam") === "true") augmentedSteamOptions.click();
}

async function loadStyle() {
    const styleContent = (await fetch(getLoopbackCdn("css/options.css")).then((res) => res.text())).replace(/(?<!transparent);/g, " !important;");

    document.head.appendChild(Object.assign(document.createElement("style"), {innerHTML: styleContent}),);
}

async function loadScript() {
    const scriptContent = (await (await fetch(getCdn("js/options.js"))).text())
        .concat(`\n//# sourceURL=${getCdn("js/options.js")}`)
        .replaceAll("chrome", "augmentedBrowser")
        .replaceAll('document.addEventListener("DOMContentLoaded"', 'document.addEventListener("initAugmentedSteamOptions"',)
        .replaceAll("../img/logo/logo.svg", getLoopbackCdn("img/logo/logo.svg"));

    document.head.appendChild(Object.assign(document.createElement("script"), {
        innerHTML: scriptContent,
    }),);
}

const warningHTML = `
<div style="   
    background-color: rgba(217,116,0,0.5);
    border-radius: 15px;
    position: absolute;
    margin-top: -10rem;
    padding: 1.5rem;
    width: 35%;
    color: white;
">
<h3>WARNING!</h3>
<p style="font-size: 14px; margin: 10px 0;">
    This settings page is a work in progress and will be rewritten in the future. As a result, not all features might work as intended. Please refrain from reporting bugs related to this page.
    All community settings don't work.
</p>
</div>
`;
