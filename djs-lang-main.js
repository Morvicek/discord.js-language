
/**
 * Discord.js Language class
 */
const fs = require("fs")
, replacer = require("./console")
class djsLang {
    /**
     * Discord.js Language class
     * @param {Client} client - Discord.js Client
     * @param {Object} options - Options ()
     */
    constructor(client, options = {}) {
        //super(client, options)

        if (typeof client !== 'object') return console.log(replacer("&3[Discord.js Language] &cNo discord.js client provided!"));
        if (!Object.keys(options).length) return console.log(replacer("&3[Discord.js Language] &cNo default options provided!"));

        this.client = client
        this.options = options
        this.folder = options.folder
        this.lang = options.languages
        //console.log(this.lang.join(" ")+this.folder)

        //Handle errors | Imported from GCommands = https://www.npmjs.com/package/gcommands
        process.on('uncaughtException', (error) => {
            console.log(replacer('&3[Discord.js Language] &cHandled: &a' + error + ` ${error.response ? error.response.data.message : ''} ${error.response ? error.response.data.code : ''} | use 'client.on("lDebug", (e) => console.log(e));' function for full error`))
            setTimeout(() => {client.emit("lDebug", error)}, 1000)
        });

        //Setup
        this.__setup()
    }
    __setup(){
        //Check provided folder
        if (!fs.existsSync(this.folder)) return console.log(replacer("&3[Discord.js Language] &cThe folder you provided does not exist!"));

        //Get .json files
        const files = fs.readdirSync(this.folder).filter(file => file.endsWith(".json"))

        //Check if provided folder has .json files
        if(!files[0]) return console.log(replacer("&3[Discord.js Language] &cThe folder you provided does not contain .json files!"))

        //Set folder
        var foldere = this.folder

        //Check if provided file endswith "/"
        if(!foldere.endsWith("/")) foldere = foldere + "/"
        
        //Log
        console.log(replacer("&3[Discord.js Language] &aLanguage system ready :)"))

        // Client.__() Function
        this.client.__ = function(message, lang){
            //Check if function has required arguments
            if(!message || !lang) return console.log(replacer("&3[Discord.js Language] &cNo message and language provided!"));

            //Check if message is object
            if (typeof message !== 'object') return console.log(replacer("&3[Discord.js Language] &cNo message object provided!"));

            //Check if language is string
            if (typeof lang !== 'string') return console.log(replacer("&3[Discord.js Language] &cLang must be a string!"));

            //Message.__() function
            message.__ = function(text){

                //Definicions
                var final, splited, pre, count;

                //Check if text is string
                if (typeof text !== 'string') return console.log(replacer("&3[Discord.js Language] &cText must be a string!"));
                
                //Get FIle
                let file = fs.readFileSync(foldere + lang +'.json');

                //Parse the file
                file = JSON.parse(file);

                //Split the text
                splited = text.split(".")

                //Final work
                pre=file
                count=0;
                splited.forEach(x =>{
                    pre = pre[splited[count]]
                    count++;
                })
                final = pre

                //return
                return final;
            }
        }
    }

}
module.exports = djsLang;