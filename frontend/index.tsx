import { Millennium } from "@steambrew/client";

let steamID = -1;

const getSteamId = async () =>
  (await SteamClient.User.GetLoginUsers())[0].avatarUrl.match(
    /avatarcache\/(\d+)/,
  )[1];

Millennium.exposeObj({
  getSteamId: () => steamID,
});

// Entry point on the front end of your plugin
export default async function PluginMain() {
  steamID = await getSteamId();
}
