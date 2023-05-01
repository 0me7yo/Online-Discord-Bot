const Discord = require("discord.js");
const client = new Discord.Client({ intents: 7753 });
const fs = require("fs");
const config = require("./config.json");

client.login(config.token);
console.log(`[Online]`) 
