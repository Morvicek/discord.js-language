const axios = require("axios")
module.exports = async () => {
    var version = require("./package.json").version
    var LangUpdate = await axios.get("https://registry.npmjs.org/discord.js-language")
    var stableVersion = LangUpdate.data["dist-tags"].latest
    
    if(stableVersion != version && !version.includes("dev")) {
        console.log("\x1b[36m\u001b[1m[Discord.js Language]\x1b[0m \x1b[31mNew update! \x1b[35mhttps://www.npmjs.com/package/discord.js-language \x1b[33m(You have version \u001b[1m" + version + "\x1b[0m\x1b[33m. Stable version is \u001b[1m" + stableVersion + "\x1b[0m\x1b[33m) \x1b[0m ")
    } else if(version.includes("dev")) {
        console.log("\x1b[36m[Discord.js Language] \x1b[31mYou have the dev version\x1b[0m")
    }
}