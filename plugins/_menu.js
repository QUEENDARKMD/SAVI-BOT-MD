const { izumi, mode ,sendMenu, sendSegMenu, setMenuType } = require("../lib/");
izumi({
    pattern: "menu ?(.*)",
    desc: "ANSH-BOT-263 user manual",
    fromMe: mode,
    type: "user",
}, async (message, match) => {
    await sendMenu(message, match);
});
izumi({
    pattern: "setmenu ?(.*)",
    desc: "ansh-v3 menu control panel",
    fromMe: true,
    type: "user",
}, async (message, match) => {
    await setMenuType(message, match);
});
const pluginTypes = ['AnimeImage', 'downloader', 'info', 'whatsapp', 'group', 'media', 'AnimeVideo', 'user', 'generator'];

pluginTypes.forEach((type) => {
    izumi({
        pattern: `.${type}$`,
        fromMe: mode,
        dontAddCommandList: true,
    }, async (message, match) => {
        await sendSegMenu(message, match,type);
    });
});
