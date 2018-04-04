const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "~";

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage("Pong");
  	}
});

client.login(process.env.BOT_TOKEN);
