## Discord.js Language Addon

# Install
- NPM = `npm i discord.js-language`

# Support server
- https://discord.gg/ReJHHaQAEJ 

# INFO
- Once you select a folder, you need to make a <language>.json file in that folder. Then you can continue working.

# Ussage

- index.js
```js
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

    message.channel.send(message.__("Example.Message.Yes"))
    message.channel.send(message.__("Test"))
    message.channel.send(message.__("wow"))
})
```

- /lang/en.json

```json
{
    "Example":{
        "Message": {
            "Yes": "Here is message :)"
        }
    },
    "Test": "test",
    "wow": "its cool right?"
}
```
