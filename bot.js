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
    
    if (nessage.content.startsWith(prefix + "say")) {
        message.channel.sendMessage(args.join(" "));
    }
    
    if (nessage.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage("pong!");
    } else
    
    if (nessage.content.startsWith(prefix + "foo")) {
        message.channel.sendMessage("bar!");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
