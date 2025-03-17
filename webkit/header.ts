import { callable } from '@steambrew/webkit';
import { Logger, sleep } from './shared';

function getIdFromAppConfig(): string | null {
  const appConfig = document.querySelector('#application_config');

  if (!appConfig) {
    Logger.warn('appConfig not found');

    return null;
  }

  const userInfo = appConfig.getAttribute('data-userinfo');

  if (userInfo === null) {
    Logger.warn('data-userinfo not found on application_config');

    return null;
  }

  const info = JSON.parse(userInfo) as { steamid: string; };

  return info.steamid;
}

function getIdFromScript(context: Node): string | null {
  const script = document.evaluate('//script[contains(text(), \'g_steamID\')]', context, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (!script) {
    Logger.warn('script steamid not found');

    return null;
  }

  return script.textContent?.match(/g_steamID.+?(\d+)/)?.[1] ?? null;
}

async function getIdFromBackend(): Promise<string | null> {
  const backend = callable<[], string>('GetSteamId');

  return backend();
}

export async function createFakeSteamHeader(): Promise<void> {
  const steamid = getIdFromAppConfig() ?? getIdFromScript(document) ?? await getIdFromBackend();
  if (steamid === null) {
    throw new Error('Could not get steamid, augmented steam will not work.');
  }

  const isReactPage = document.querySelector('[data-react-nav-root]') !== null;

  if (isReactPage) {
    // Wait on react to load
    const start = performance.now();
    while (performance.now() - start < 5000) {
      // @ts-expect-error any, global react object
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-underscore-dangle, @typescript-eslint/no-unsafe-member-access
      const root = SSR?.reactRoot?._internalRoot;
      if (root !== undefined) {
        break;
      }

      // eslint-disable-next-line no-await-in-loop
      await sleep(100);
    }

    if (performance.now() - start > 5000) {
      throw new Error('Timed out waiting for react root');
    }

    const node = document.createElement('header');
    node.innerHTML = reactFakeHeader.replaceAll('%user_id%', steamid);
    const pageContent = document.querySelector('#StoreTemplate');
    pageContent?.prepend(node);
  } else {
    const node = document.createElement('div');
    node.innerHTML = legacyFakeHeader.replaceAll('%user_id%', steamid);
    const pageContent = document.querySelector('.responsive_page_content') ?? document.querySelector('.headerOverride');
    pageContent?.prepend(node);
  }
}

const legacyFakeHeader = '<div id=global_header style=display:none data-panel=\'{"flow-children":"row"}\'role=banner><div class=content><div class=logo><span id=logo_holder><a href="https://store.steampowered.com/?snr=1_5_9__global-header"aria-label="Link to the Steam Homepage"><img alt="Link to the Steam Homepage"height=44 src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"width=176></a></span></div><div class=supernav_container aria-label="Global Menu"role=navigation><a href="https://store.steampowered.com/?snr=1_5_9__global-header"class="menuitem supernav supernav_active"data-tooltip-content=.submenu_Store data-tooltip-type=selector>STORE</a><div class=submenu_Store style=display:none data-submenuid=Store><a href="https://store.steampowered.com/?snr=1_5_9__global-header"class=submenuitem>Home </a><a href="https://store.steampowered.com/explore/?snr=1_5_9__global-header"class=submenuitem>Discovery Queue </a><a href=https://steamcommunity.com/my/wishlist/ class=submenuitem>Wishlist </a><a href="https://store.steampowered.com/points/shop/?snr=1_5_9__global-header"class=submenuitem>Points Shop </a><a href="https://store.steampowered.com/news/?snr=1_5_9__global-header"class=submenuitem>News </a><a href="https://store.steampowered.com/stats/?snr=1_5_9__global-header"class=submenuitem>Stats </a><a href="https://store.steampowered.com/about/?snr=1_5_9__global-header"class=submenuitem>About</a></div><a href=https://steamcommunity.com/ class="menuitem supernav"data-tooltip-content=.submenu_Community data-tooltip-type=selector>COMMUNITY</a><div class=submenu_Community style=display:none data-submenuid=Community><a href=https://steamcommunity.com/ class=submenuitem>Home </a><a href=https://steamcommunity.com/discussions/ class=submenuitem>Discussions </a><a href=https://steamcommunity.com/workshop/ class=submenuitem>Workshop </a><a href=https://steamcommunity.com/market/ class=submenuitem>Market </a><a href="https://steamcommunity.com/?subsection=broadcasts"class=submenuitem>Broadcasts</a></div><a href=https://steamcommunity.com/my/ class="menuitem supernav username"data-tooltip-content=.submenu_Profile data-tooltip-type=selector>Fake user</a><div class=submenu_Profile style=display:none data-submenuid=Profile><a href=https://steamcommunity.com/my/home/ class=submenuitem>Activity </a><a href=https://steamcommunity.com/my/ class=submenuitem>Profile </a><a href=https://steamcommunity.com/my/friends/ class=submenuitem>Friends </a><a href=https://steamcommunity.com/my/games/ class=submenuitem>Games </a><a href=https://steamcommunity.com/my/groups/ class=submenuitem>Groups </a><a href=https://steamcommunity.com/my/screenshots/ class=submenuitem>Content </a><a href=https://steamcommunity.com/my/badges/ class=submenuitem>Badges </a><a href=https://steamcommunity.com/my/inventory/ class=submenuitem>Inventory </a><a href="https://store.steampowered.com/yearinreview/?snr=1_5_9__global-header"class=submenuitem>Steam Replay</a></div><a href=https://steamcommunity.com/chat/ class=menuitem>Chat </a><a href=https://help.steampowered.com/en/ class=menuitem>SUPPORT</a></div><div id=global_actions><div id=global_action_menu role=navigation aria-label="Account Menu"><a href="https://store.steampowered.com/about/?snr=1_5_9__global-header"class="header_installsteam_btn header_installsteam_btn_gray"><div class=header_installsteam_btn_content>Install Steam</div></a><div id=header_notification_area style=position:relative><div data-featuretarget=green-envelope><div><button class="_1jW5_Ycv6jGKu28A1OSIQK _34A9kjlnmgfUWSmr16VjXE"id=green_envelope_menu_root><svg class=_13fwmIK8Ajo0qndUS5zb7E fill=none viewBox="0 0 36 36"xmlns=http://www.w3.org/2000/svg><g class=SVGIcon_Notification><path clip-rule=evenodd d="M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z"fill=currentColor fill-rule=evenodd></path><path clip-rule=evenodd d="M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z"fill=currentColor fill-rule=evenodd class=SVGIcon_Notification_Uvula></path></g></svg></button></div></div><script>$J(EnableNotificationCountPolling)</script><div class="global_header_toggle_button header_notification_bell header_notification_btn"style=background-color:rgba(0,0,0,0) id=header_notification_link></div></div><button class="global_action_link persona_name_text_content pulldown"id=account_pulldown onclick=\'ShowMenu(this,"account_dropdown","right","bottom",!0)\'>Fake user</button><div class=popup_block_new style=display:none id=account_dropdown><div class="popup_body popup_menu"><a href=https://steamcommunity.com/profiles/%user_id%/ class=popup_menu_item>View my profile</a> <a href="https://store.steampowered.com/account/?snr=1_5_9__global-header"class=popup_menu_item>Account details: <span class=account_name>%user_id%</span></a> <a href="https://store.steampowered.com/account/preferences/?snr=1_5_9__global-header"class=popup_menu_item>Store preferences</a> <a href="https://store.steampowered.com/steamaccount/addfunds/?snr=1_5_9__global-header"class=popup_menu_item>View my wallet <span class=account_name>10,00€</span></a> <span class=popup_menu_item id=account_language_pulldown>Change language</span><div class=popup_block_new style=display:none id=language_dropdown><div class="popup_body popup_menu"><a href="https://www.valvesoftware.com/en/contact?contact-person=Translation%20Team%20Feedback"class="popup_menu_item tight"target=_blank>Report a translation problem</a></div></div><a href=javascript:Logout(); class=popup_menu_item>Sign out of account...</a></div></div><script>RegisterFlyout("account_language_pulldown","language_dropdown","leftsubmenu","bottomsubmenu",!0)</script><div id=header_wallet_ctn><a href=https://store.steampowered.com/account/store_transactions/ class=global_action_link id=header_wallet_balance>10,00€</a></div></div><a href=https://steamcommunity.com/profiles/%user_id%/ class="online playerAvatar user_avatar"aria-label="View your profile"><img alt="fake user"></a></div></div></div>';
const reactFakeHeader = '<header class="bp0Pu4TVwpI- eGsI8rO3zfU-"style=display:none><div class=Ca2l5LKN6as-><a class=_2GKjdN512t4- href=https://store.steampowered.com/ aria-label="Link to the Steam Homepage"><img alt="Link to the Steam Homepage"src=https://cdn.fastly.steamstatic.com/store/ssr/TYQTXQDA.svg height=44 width=176></a><nav class=MMrgod6KQlc-><ul class=k0AAbwuFzJQ-><a class=ofgQne2Wvqg- href="https://store.steampowered.com/?snr=1_25_4__globalheader"aria-expanded=false aria-current=page>STORE</a><div class="F0YMvqVKHkY- iHkamGVWNgw-"popover=manual role=region><a class=_9-ylsFqlD1Y- href="https://store.steampowered.com/?snr=1_25_4__globalheader"aria-expanded=false aria-current=page>Home</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href="https://store.steampowered.com/explore/?snr=1_25_4__globalheader"aria-expanded=false>Discovery Queue</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/wishlist/ aria-expanded=false>Wishlist</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href="https://store.steampowered.com/points/shop/?snr=1_25_4__globalheader"aria-expanded=false>Points Shop</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href="https://store.steampowered.com/news/?snr=1_25_4__globalheader"aria-expanded=false>News</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href="https://store.steampowered.com/stats/?snr=1_25_4__globalheader"aria-expanded=false>Stats</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href="https://store.steampowered.com/about/?snr=1_25_4__globalheader"aria-expanded=false>About</a><div class=F0YMvqVKHkY- popover=manual role=region></div></div><a class=ofgQne2Wvqg- href=https://steamcommunity.com/ aria-expanded=false>COMMUNITY</a><div class="F0YMvqVKHkY- iHkamGVWNgw-"popover=manual role=region><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/ aria-expanded=false>Home</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/discussions/ aria-expanded=false>Discussions</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/workshop/ aria-expanded=false>Workshop</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/market/ aria-expanded=false>Market</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href="https://steamcommunity.com/?subsection=broadcasts"aria-expanded=false>Broadcasts</a><div class=F0YMvqVKHkY- popover=manual role=region></div></div><a class="ofgQne2Wvqg- FTufO00UqAw-"href=https://steamcommunity.com/my/ aria-expanded=false>%user_id%</a><div class="F0YMvqVKHkY- iHkamGVWNgw-"popover=manual role=region><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/home/ aria-expanded=false>Activity</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/ aria-expanded=false>Profile</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/friends/ aria-expanded=false>Friends</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/games/ aria-expanded=false>Games</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/groups/ aria-expanded=false>Groups</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/screenshots/ aria-expanded=false>Content</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/badges/ aria-expanded=false>Badges</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href=https://steamcommunity.com/my/inventory/ aria-expanded=false>Inventory</a><div class=F0YMvqVKHkY- popover=manual role=region></div><a class=_9-ylsFqlD1Y- href="https://store.steampowered.com/yearinreview/?snr=1_25_4__globalheader"aria-expanded=false>Steam Replay</a><div class=F0YMvqVKHkY- popover=manual role=region></div></div><a class=ofgQne2Wvqg- href=https://steamcommunity.com/chat/ aria-expanded=false>Chat</a><div class="F0YMvqVKHkY- iHkamGVWNgw-"popover=manual role=region></div><a class=ofgQne2Wvqg- href=https://help.steampowered.com/en/ aria-expanded=false>SUPPORT</a><div class="F0YMvqVKHkY- iHkamGVWNgw-"popover=manual role=region></div></ul></nav><div class=h3Jy-1Il1os-><a class=_2CYMhC951F4- href=https://store.steampowered.com/about/ >Install Steam</a><div class=NzGUCXVXDcA-><div><button class="_99Vgt1ahI7Y- iN37A3Nzs1s-"id=green_envelope_menu_root><svg class=l5XI-YSDhPA- fill=none viewBox="0 0 36 36"xmlns=http://www.w3.org/2000/svg><g class=SVGIcon_Notification><path clip-rule=evenodd d="M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z"fill=currentColor fill-rule=evenodd></path><path clip-rule=evenodd d="M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z"fill=currentColor fill-rule=evenodd class=SVGIcon_Notification_Uvula></path></g></svg></button></div></div><div class=Hxi-pnf9Xlw-><button class=QYT54GHN-rI- aria-expanded=false>%user_id%</button><div class="F0YMvqVKHkY- cQPGTl-Lp-0-"popover=manual role=region><a class=TwsehSqoph8- href=https://steamcommunity.com/profiles/%user_id%/ tabindex=0>View my profile</a> <a class=TwsehSqoph8- href="https://store.steampowered.com/account/?snr=1_25_4__globalheader"tabindex=0>Account details: <span class=HOrB6lehQpg->%user_id%</span></a> <a class=TwsehSqoph8- href="https://store.steampowered.com/account/preferences/?snr=1_25_4__globalheader"tabindex=0>Store preferences</a> <a class=TwsehSqoph8- href="https://store.steampowered.com/steamaccount/addfunds/?snr=1_25_4__globalheader"tabindex=0>View my wallet: <span class=HOrB6lehQpg->43,17€</span></a> <span class=TwsehSqoph8- aria-expanded=false tabindex=0>Change language</span><div class="F0YMvqVKHkY- rzUmQa-ty1I-"popover=manual role=region></div><button class=TwsehSqoph8- tabindex=0>Sign out of account...</button></div></div><a class=_7iCcob-JJ4g- href=https://steamcommunity.com/profiles/%user_id%/ ><div class="_-2DlbVABlsg- t1-DQ4KhiQ0-"data-size=Small data-status-position=border><div class=gRteJ-XhQG8-></div><img alt=""class=YbrTGQJwy1w- draggable=false></div></a></div><div class=r4HLvRr97Ps-></div></div><div class=ewJx-kmPr-8-><button class=SmaLDT4y0RE-><img alt=""src=https://cdn.fastly.steamstatic.com/store/ssr/X3MIBOBA.png class=LyTAF1R-NHw-><div class=FhcQPauG0Bc-><div class=_40MmWrTStR0-><span class=_5N8HUkyU1sA->1</span></div></div></button> <a class=_2GKjdN512t4- href=https://store.steampowered.com/ aria-label="Link to the Steam Homepage"><img alt="Link to the Steam Homepage"src=https://cdn.fastly.steamstatic.com/store/ssr/KSEIVHDA.png height=36></a></div></header>';
