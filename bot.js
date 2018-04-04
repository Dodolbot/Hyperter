const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "~";

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage("pong!");
    } else
    
    if (message.content.startsWith(prefix + "foo")) {
        message.channel.sendMessage("bar!");
  	}
});

bot.login('BOT_TOKEN');
