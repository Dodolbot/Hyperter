const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');

    client.user.setActivity("Prefix use -", {type: "PLAYING"});
    
});

const prefix = "-";

client.on('message', message => {

    let msg = message.content.toUpperCase(); 
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
   
    
    if (msg === prefix + 'PING') { 
    
        let ping = Date.now() - message.createdTimestamp
	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
    
        if (msg ==='HALLO') { 

        message.reply('`Hallo juga`');
            
     }
    
    if (message.content.startsWith(prefix + 'send')) {
    client.channels.get('431726383979429888').sendMessage('``Jangan Lupa untuk selalu support channel ini :) \n Agar terus berkembang dan selalu aktif ! \n\n NB: Kerjasama kalian lah yang berarti bagi kami``');
    
    }
    
    if(msg === prefix + 'AVATAR') {
        
        message.reply(message.author.avatarURL);
    }
    
    if (msg === prefix + 'INVITE') { 

        message.channel.send('```want to invite this bot to your server? \n\n Please go to the link below```');
        message.channel.send('Invite link: \n https://discordapp.com/oauth2/authorize?client_id=432115612655943680&scope=bot&permissions=8');

    }
    
    
    if (msg === prefix + 'INFO') { 

        message.channel.send('```-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- \n\n Masih Di test :v \n\n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-```'); 
        
    }
    
    if (msg === prefix + 'HELP') {
        message.channel.send('```-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- \n -Clear   = To clear chats on channel ! \n -Ping    = to test your ping !\n -Avatar  = For photos view your profile ! \n\n -Invite  = To invite this bot to your server !\n -Info    = To find out more info about Eye ! \n -Update  = To check for new BOT update feature !\n \n if you need help use the command: -help \n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ```');
     
    }
    
    if (msg === prefix + 'UPDATE') {
        message.channel.send('``` Belum di update :v```')
    }
    
    if (msg.startsWith(prefix + 'CLEAR')) { 

        async function purge() {
            message.delete(); 
            if (!message.member.roles.find("name", "Developer")) { 
                message.channel.send('You need the \`Developer\` role to use this command.'); 
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send('```Use the command correctly. \n Example: ' + prefix + 'Clear <2 - 100>```'); 
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); 
            message.channel.send('```Chat has been cleared !```'); 

        }

        purge(); 
    }
    
    
});

client.login(process.env.BOT_TOKEN);
