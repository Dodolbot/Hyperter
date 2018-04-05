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
    
    let args = message.content.split(" ").slice(1);
    
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let count = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    if (command === "say") {
        message.channel.sendMessage(args.join(" "));
    }
    
    if (command === "ping") {
    	message.reply("**Internet di stabilkan !!**");
  	}
    
     if (msg.startsWith(prefix + 'PURGE')) {
         async function purge() {
             message.delete();
     if  (!message.member.roles.find("name", "bot-commander")) {
         message.channel.send('You need the \`bot-commander\` role to use this command.');
         return;
     }
     if (isNaN(args[0])) {
         message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');
         return;
    }
    const fetched = await message.channel.fetchMessages({limit: args[0]});
    console.log(fetched.size + ' messages found, deleting...');
    message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));
    }
         purge();
         
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
