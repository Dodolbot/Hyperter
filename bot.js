const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "-";

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    
    if (command === "ping") {
    	message.reply("**Internet di stabilkan !!**");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
