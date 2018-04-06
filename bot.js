const Discord = require('discord.js');
const client = new Discord.Client();



Client.on('ready', () => {
    
console.log(' ');
    
    
client.user.setGame("in 10000|Servers");
client.user.setStatus("Online");
    
    
});

client.on('message', messsage => {
    if (message.content === 'lol') {
        message.reply('lol lol');
    }
});

client.login(BOT_TOKEN);
