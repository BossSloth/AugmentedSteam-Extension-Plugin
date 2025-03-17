import { Millennium } from '@steambrew/webkit';
import { getCdn, getLoopbackCdn, LOOPBACK_CDN } from './shared';

export function injectPreferences() {
    const sidebarContainer = document.querySelector('.two_column.left');
    const mainContainer = document.querySelector('.two_column.right');

    if (!sidebarContainer || !mainContainer) {
        return;
    }

    const augmentedSteamOptions = document.createElement('div');
    augmentedSteamOptions.style.cursor = 'pointer';
    augmentedSteamOptions.classList.add('nav_item');
    augmentedSteamOptions.innerHTML = `<img class="ico16" src="${getLoopbackCdn('img/logo/as48.png')}" alt="logo"> <span>Augmented Steam</span>`;

    sidebarContainer.appendChild(augmentedSteamOptions);

    augmentedSteamOptions.addEventListener('click', async () => onOptionsClick(sidebarContainer, augmentedSteamOptions, mainContainer));

    const url = new URL(window.location.href);
    if (url.searchParams.get('augmented-steam') === 'true') {
        augmentedSteamOptions.click();
    }
}

async function onOptionsClick(sidebarContainer: Element, augmentedSteamOptions: Element, mainContainer: Element) {
    sidebarContainer.querySelectorAll('.active').forEach((element) => {
        element.classList.remove('active');
    });
    augmentedSteamOptions.classList.toggle('active');

    const url = new URL(window.location.href);
    url.search = ''; // Removes all searchParams from the URL
    url.searchParams.set('augmented-steam', 'true');
    window.history.replaceState({}, '', url.href);

    let optionsHtml = await (await fetch(`${getCdn('html/options.html')}`)).text();
    optionsHtml = optionsHtml.replace('<base target="_blank">', '');
    mainContainer.innerHTML = warningHTML + optionsHtml;

    await Promise.all([
        loadStyle(),
        loadScript(),
    ]);

    document.dispatchEvent(new Event('initAugmentedSteamOptions'));

    const button = (await Millennium.findElement(document, '.buttons.svelte-1nzirk3'))[0];
    const clearCacheButton = document.createElement('button');
    clearCacheButton.onclick = () => {
        if (!window.confirm('Are you sure you want to clear the cache?')) {
            return;
        }

        window.augmentedBrowser.runtime.sendMessage({action: 'cache.clear'}, () => {
            window.location.reload();
        });
    };

    const span = document.createElement('span');
    span.dataset.tooltipText = 'This may fix some issues with the plugin.';
    span.innerText = 'Clear cache';
    clearCacheButton.appendChild(span);

    button?.appendChild(clearCacheButton);
}

async function loadStyle() {
    let styleContent = await (await fetch(getCdn('css/options.css'))).text();
    styleContent = styleContent.replace(/(?<!transparent)([;}])/g, ' !important$1')
    .replaceAll('chrome-extension://__MSG_@@extension_id__', LOOPBACK_CDN);

    const style = document.createElement('style');
    style.innerHTML = styleContent;
    document.head.appendChild(style);

    // Append Steam override styles
    const steamOverrideStyles = document.createElement('style');
    steamOverrideStyles.innerHTML = steamContainerOverrideStyles;
    document.head.appendChild(steamOverrideStyles);
}

async function loadScript() {
    let scriptContent = await (await fetch(getCdn('js/options.js'))).text();
    scriptContent += '\n//# sourceURL=' + getCdn('js/options.js');
    scriptContent = scriptContent
        .replaceAll('chrome', 'augmentedBrowser')
        .replaceAll('document.addEventListener("DOMContentLoaded"', 'document.addEventListener("initAugmentedSteamOptions"')
        .replaceAll('../img/logo/logo.svg', getLoopbackCdn('img/logo/logo.svg'));

    const script = document.createElement('script');
    script.innerHTML = scriptContent;
    document.head.appendChild(script);
}

const warningHTML = `
<div style="
    background-color: rgba(217,116,0,0.5);
    border-radius: 15px;
    padding: 1.5rem;
    color: white;
">
<h3>WARNING!</h3>
<p style="font-size: 14px; margin: 10px 0;">
    This settings page is a work in progress and will be rewritten in the future. As a result, not all features might work as intended. Please refrain from reporting bugs related to this page.
    All community settings don't work.
</p>
</div>
`;

// Override steam preferences container max-width & overflow when augmented steam options are present
const steamContainerOverrideStyles = `
#main_content:has(#options) {
    width: auto;
    max-width: 1155px;
}

.two_column.right:has(#options) {
    overflow: auto;
}
`;
