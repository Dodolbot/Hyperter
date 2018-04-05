const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "-";

client.on('message', message => {

    let msg = message.content.toUpperCase(); 
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);


    if (msg === prefix + 'PING') { 

        message.channel.send('Ping!'); 

    }


    if (msg.startsWith(prefix + 'PURGE')) { 

        async function purge() {
            message.delete(); 

            if (!message.member.roles.find("name", "MOD")) { 
                message.channel.send('You need the \`MOD\` role to use this command.'); 
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

client.login(process.env.BOT_TOKEN);
