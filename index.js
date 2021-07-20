const djslang = require("discord.js-language")
const Discord = require("discord.js")
// Make discord.js client
const client = new Discord.Client()

//Setup language
new djslang(client, {
    //Select folder
    folder: "./lang"
})

//React on message
client.on("message", async message => {
    //Setup message
    client.__(message, "en")
    //Reply
    message.channel.send(message.__("test.test"))
    message.channel.send(message.__("test2"))
})

client.login("TOKEN")
