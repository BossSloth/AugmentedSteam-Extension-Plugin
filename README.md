# Augmented Steam Plugin for Millennium

> [!CAUTION]
> This plugin has been archived and is no longer maintained. No further updates will be provided.

> [!CAUTION]
> Please use the [Extendium](https://github.com/BossSloth/Extendium) plugin instead, which offers more features and is actively maintained.

This plugin ports the functionality of the [Augmented Steam Browser Extension](https://github.com/IsThereAnyDeal/AugmentedSteam) to the Steam client using Millennium.

## Features

> Pretty much all the Augmented Steam extension's features are included in this plugin.

See the [AugmentedSteam Browser Extension](https://github.com/IsThereAnyDeal/AugmentedSteam) for more details about
each feature or the [extension page](https://augmentedsteam.com/) for more images.
Also some features from the extension are ported to the library see
[Library extra details](#extra-library-details)

## Installation

1. Ensure you have [Millennium](https://github.com/shdwmtr/millennium) installed on your Steam client
2. Download the [latest release](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/releases) of this plugin
3. Place the plugin files in your Millennium plugins directory (should be a plugins folder in your Steam client
   directory)
4. Restart your Steam client
5. Enable the Augmented Steam plugin in the Millennium plugin menu
6. FULLY restart the Steam client again

## Usage

Once installed it should just work out of the box.
<br>
To see if the plugin is working you can go to any store app page and look for the newly added features (highlighted in
yellow)
![Augmented Steam features](Images/steam_store.png)

## Configuration

To configure the plugin:

1. Open Steam and navigate to the main store page
2. Click on "Your Store" in the top menu, then select "Preferences"
   <br>2.5. Or just click on your profile top right, then Account details
3. Look for the "Augmented Steam" button and click it

Alternatively, you can access the options page directly by entering this URL in your Steam client:
https://store.steampowered.com/account/?augmented-steam=true

Here you can customize various features and behaviors of the Augmented Steam plugin to suit your preferences. Just like
in the
browser extension.

## Images

#### Store

![Augmented Steam store page](Images/steam_store.png)

### Extra library details

After clicking on the (i) in the library you will now also see the HowLongToBeat times and player count in the game
details. These are cached for 1 hour.
![Library extra details](Images/library_details.png)

#### Options page

![Augmented Steam options](Images/augmented_steam_options.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Steps on how to set up the project

> It is recommended to put the plugin repository in your Steam plugins folder or make some symbolic links to the
> repository for easier development.

1. Clone the repository using `git clone https://github.com/tddebart/AugmentedSteam-Extension-Plugin.git`
2. Pull the AugmentedSteam submodule using `git submodule update --init`
3. Run `bun install` or use your favorite package manager
4. Run `bun build-augmented-steam` to build the AugmentedSteam submodule
5. Now you can run `bun watch` or `bun dev` to build the plugin and watch for changes

> Note: `bun dev` will only watch for changes in the webkit and frontend folder and just require a `F5` in the steam
> client to reload.
> For changes to the backend, you will need to fully restart the Steam client.

## Credits

- Original Augmented Steam Extension: [AugmentedSteam](https://github.com/IsThereAnyDeal/AugmentedSteam)
- [Millennium](https://github.com/shdwmtr/millennium)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

