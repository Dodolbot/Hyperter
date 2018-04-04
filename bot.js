const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "~";

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
    let command = messsage.content.split(" ")[0];
    command = command.slice(prefix.length);
    
    let args = message.content.split(" ").slice(1);
    
    if (command === "say") {
        message.channel.sendMessage(args.join(" "));
    }
    
    if (command === "ping") {
        message.channel.sendMessage("pong!");
    } else
    
    if (command === "foo") {
        message.channel.sendMessage("bar!");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
