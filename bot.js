const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}

const prefix = "-";

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    
    let args = message.content.split(" ").slice(1);
    
    if (command === "say") {
        message.channel.sendMessage(args.join(" "));
    }
    
    if (command === "ping") {
    	message.reply("**Internet di stabilkan !!**");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
