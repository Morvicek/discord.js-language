
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

        this.__setup()
    }
    __setup(){
        if (!fs.existsSync(this.folder)) return console.log(replacer("&3[Discord.js Language] &cThe folder you provided does not exist!"));
        const files = fs.readdirSync(this.folder).filter(file => file.endsWith(".json"))
        if(!files[0]) return console.log(replacer("&3[Discord.js Language] &cThe folder you provided does not contain .json files!"))
        var foldere = this.folder
        if(!foldere.endsWith("/")) foldere = foldere + "/"
        this.client.__ = function(message, lang){
            if(!message || !lang) return console.log(replacer("&3[Discord.js Language] &cNo message and language provided!"));
            if (typeof message !== 'object') return console.log(replacer("&3[Discord.js Language] &cNo message object provided!"));
            if (typeof lang !== 'string') return console.log(replacer("&3[Discord.js Language] &cLang must be a string!"));
            message.__ = function(stringe){
                var e, i, z, c;
                if (typeof stringe !== 'string') return console.log(replacer("&3[Discord.js Language] &cText must be a string!"));
                
                let file = fs.readFileSync(foldere + lang +'.json');
                let filee = JSON.parse(file);
                i = stringe.split(".")
                z=filee
                c=0;
                i.forEach(x =>{
                    z = z[i[c]]
                    c++;
                })
                e = z
                return e;
            }
        }
    }

}
module.exports = djsLang;