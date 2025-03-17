/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
export function getNeededScripts(): string[] {
  const href = window.location.href;
  const scripts = [];

  // #region Autogenerated code from convert-manifest.ts
  if ((href.match(/^.*:\/\/store\.steampowered\.com\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/.*$/))) {
    scripts.push('scriptlets/SteamScriptlet.js');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/app\/.*$/)) && !(href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides$/) || href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides\?.*$/))) {
    scripts.push('js/community/app.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/app.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator\?.*$/))) {
    scripts.push('js/community/booster_creator.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/booster_creator.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/.*$/)) && !(href.match(/^.*:\/\/steamcommunity\.com\/login$/) || href.match(/^.*:\/\/steamcommunity\.com\/login\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/login\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/openid$/) || href.match(/^.*:\/\/steamcommunity\.com\/openid\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/openid\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/comment$/) || href.match(/^.*:\/\/steamcommunity\.com\/comment\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/comment\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/chat$/) || href.match(/^.*:\/\/steamcommunity\.com\/chat\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/chat\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradeoffer\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/market$/) || href.match(/^.*:\/\/steamcommunity\.com\/market\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/market\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/groups\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/app\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/filedetails$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/filedetails\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/filedetails\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/filedetails$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/filedetails\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/filedetails\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/editguide\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/editguide\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/editguide\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/editguide\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/tradingcards\/boostercreator\?.*$/))) {
    scripts.push('js/community/default.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/default.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges\?.*$/))) {
    scripts.push('js/community/badges.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/badges.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides$/) || href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/app\/.*\/guides\?.*$/))) {
    scripts.push('js/community/guides.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/guides.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/market\/search$/) || href.match(/^.*:\/\/steamcommunity\.com\/market\/search\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/market\/search\?.*$/))) {
    scripts.push('js/community/market_search.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/market_search.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/gamecards\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/gamecards\/.*$/))) {
    scripts.push('js/community/gamecard.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/gamecard.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/stats\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/stats\/.*$/))) {
    scripts.push('js/community/profile_stats.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/profile_stats.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/editguide\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/editguide\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/editguide\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/editguide\?.*$/))) {
    scripts.push('js/community/edit_guide.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/edit_guide.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friendactivitydetail\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friendactivitydetail\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/status\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/status\/.*$/))) {
    scripts.push('js/community/profile_activity.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/profile_activity.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myworkshopfiles\/\?.*browsefilter=mysubscriptions.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myworkshopfiles\?.*browsefilter=mysubscriptions.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myworkshopfiles\/\?.*browsefilter=mysubscriptions.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myworkshopfiles\?.*browsefilter=mysubscriptions.*$/))) {
    scripts.push('js/community/myworkshop.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/myworkshop.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*$/)) && !(href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/home\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/home\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myactivity\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myactivity\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friendactivitydetail\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friendactivitydetail\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/status\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/status\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/edit\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/edit\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/badges\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/badges\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/gamecards\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/gamecards\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friendsthatplay\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friendsthatplay\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friends$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friends\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friends\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friends$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friends\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friends\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/groups$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/groups\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/groups\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/groups$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/groups\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/groups\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/following$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/following\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/following\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/following$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/following\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/following\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/stats\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/stats\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myworkshopfiles\/\?.*browsefilter=mysubscriptions.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/myworkshopfiles\?.*browsefilter=mysubscriptions.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myworkshopfiles\/\?.*browsefilter=mysubscriptions.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/myworkshopfiles\?.*browsefilter=mysubscriptions.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews\?.*$/))) {
    scripts.push('js/community/profile_home.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/profile_home.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friendsthatplay\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friendsthatplay\/.*$/))) {
    scripts.push('js/community/friends_that_play.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/friends_that_play.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/games\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/games\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/followedgames\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/followedgames\?.*$/))) {
    scripts.push('js/community/games.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/games.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/groups\/.*$/))) {
    scripts.push('js/community/group_home.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/group_home.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friends$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friends\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/friends\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friends$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friends\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/friends\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/groups$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/groups\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/groups\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/groups$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/groups\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/groups\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/following$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/following\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/following\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/following$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/following\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/following\?.*$/))) {
    scripts.push('js/community/friends_and_groups.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/friends_and_groups.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/inventory\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/inventory\?.*$/))) {
    scripts.push('js/community/inventory.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/inventory.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/market\/listings\/.*$/))) {
    scripts.push('js/community/market_listing.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/market_listing.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/tradeoffer\/.*$/))) {
    scripts.push('js/community/trade_offer.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/trade_offer.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/filedetails$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/filedetails\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/filedetails\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/filedetails$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/filedetails\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/filedetails\?.*$/))) {
    scripts.push('js/community/shared_files.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/shared_files.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/browse\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/browse\?.*$/))) {
    scripts.push('js/community/workshop_browse.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/workshop_browse.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/recommended\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/recommended\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/reviews\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/reviews\?.*$/))) {
    scripts.push('js/community/recommended.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/recommended.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/bundle\/.*$/))) {
    scripts.push('js/store/bundle.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/bundle.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/app\/.*$/))) {
    scripts.push('js/store/app.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/app.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/points$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/points\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/points\?.*$/))) {
    scripts.push('js/store/points_shop.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/points_shop.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard\?.*$/))) {
    scripts.push('js/store/funds.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/funds.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/market$/) || href.match(/^.*:\/\/steamcommunity\.com\/market\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/market\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/market\?.*$/))) {
    scripts.push('js/community/market_home.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/market_home.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey\?.*$/))) {
    scripts.push('js/store/registerkey.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/registerkey.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/search$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/search\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/search\?.*$/))) {
    scripts.push('js/store/search.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/search.css');
  }

  if ((href.match(/^.*:\/\/store\.steampowered\.com\/account\/licenses$/) || href.match(/^.*:\/\/store\.steampowered\.com\/account\/licenses\/$/) || href.match(/^.*:\/\/store\.steampowered\.com\/account\/licenses\/\?.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/account\/licenses\?.*$/))) {
    scripts.push('js/store/licences.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/licences.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist\/id\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist\/profiles\/.*$/))) {
    scripts.push('js/store/wishlist.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/wishlist.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/id\/.*\/edit\/.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/profiles\/.*\/edit\/.*$/))) {
    scripts.push('js/community/profile_edit.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/profile_edit.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/sub\/.*$/))) {
    scripts.push('js/store/sub.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/sub.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/agecheck\/.*$/))) {
    scripts.push('js/store/agecheck.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/agecheck.css');
  }

  if ((href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/sharedfiles\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\/\?.*$/) || href.match(/^.*:\/\/steamcommunity\.com\/workshop\?.*$/))) {
    scripts.push('js/community/workshop.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/community/workshop.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/cart$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/cart\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/cart\?.*$/))) {
    scripts.push('js/store/cart.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/cart.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/account$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\?.*$/))) {
    scripts.push('js/store/account.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/account.css');
  }

  if ((href.match(/^.*:\/\/store\.steampowered\.com\/$/) || href.match(/^.*:\/\/store\.steampowered\.com\/\?.*$/))) {
    scripts.push('js/store/frontpage.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/frontpage.css');
  }

  if ((href.match(/^.*:\/\/.*\.steampowered\.com\/.*$/)) && !(href.match(/^.*:\/\/store\.steampowered\.com\/dynamicstore\/.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/supportmessages$/) || href.match(/^.*:\/\/store\.steampowered\.com\/supportmessages\/$/) || href.match(/^.*:\/\/store\.steampowered\.com\/supportmessages\/\?.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/supportmessages\?.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/video\/.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/widget$/) || href.match(/^.*:\/\/store\.steampowered\.com\/widget\/.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/widget\?.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/login$/) || href.match(/^.*:\/\/store\.steampowered\.com\/login\/.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/login\?.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/join$/) || href.match(/^.*:\/\/store\.steampowered\.com\/join\/.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/join\?.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/api\/.*$/) || href.match(/^.*:\/\/api\.steampowered\.com\/.*$/) || href.match(/^.*:\/\/help\.steampowered\.com\/.*$/) || href.match(/^.*:\/\/login\.steampowered\.com\/.*$/) || href.match(/^.*:\/\/checkout\.steampowered\.com\/.*$/) || href.match(/^.*:\/\/partner\.steampowered\.com\/.*$/) || href.match(/^.*:\/\/store\.steampowered\.com\/$/) || href.match(/^.*:\/\/store\.steampowered\.com\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist\/id\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/wishlist\/profiles\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/search$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/search\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/search\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/steamaccount\/addfunds\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/digitalgiftcards\/selectgiftcard\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/licenses$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/licenses\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/licenses\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/licenses\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey\/$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey\/\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/account\/registerkey\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/bundle\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/sub\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/app\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/agecheck\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/points$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/points\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/points\?.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/cart$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/cart\/.*$/) || href.match(/^.*:\/\/.*\.steampowered\.com\/cart\?.*$/))) {
    scripts.push('js/store/default.js');
    scripts.push('css/augmentedsteam.css');
    scripts.push('css/store/default.css');
  }
  // #endregion

  return scripts;
}
