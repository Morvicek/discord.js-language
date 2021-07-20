module.exports = (text) =>{
    require("./update")()
    text = text
    // COLORS
    .replace(/&c/g, "\x1b[31m") //Red
    .replace(/&a/g, "\x1b[32m") //Green
    .replace(/&e/g, "\x1b[33m") //Yellow
    .replace(/&b/g, "\x1b[34m") //Blue
    .replace(/&d/g, "\x1b[35m") //Purple
    .replace(/&3/g, "\x1b[36m") //Cyan
    .replace(/&f/g, "\x1b[37m") //Black / White

    // OTHER
    .replace(/&r/g, "\x1b[0m") //Reset
    .replace(/&q/g, "\u001b[1m") //Bold
    .replace(/&n/g, "\x1b[4m") //Underline
    .replace(/&p/g, "\x1b[7m") //Background
    return text + "\x1b[0m";
}