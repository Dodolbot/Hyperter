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

        message.reply('**Ping telah distabilkan** !!'); 
     
    }
    
    if (msg === prefix + 'INVITE') { 

        message.channel.send('```Kamu ingin invite bot ini ke server kamu ? \n Silahkan masuk ke link dibawah```');
        message.channel.send('Invite link: \n https://discordapp.com/oauth2/authorize?client_id=431480846776533003&scope=bot&permissions=8');

    }
    
    
    if (msg === prefix + 'INFO') { 

        message.channel.send('```-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- \n Hai. selamat datang di Classy [BOT] \n BOT ini masih dalam tahap pengembangan dalam UJI TEST \n jadi mohon maaf jika masih ada kekurangan dalam BOT ini \n \n Created by: Classy Luck#8300 \n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-```'); 
        
    }
    
    if (msg === prefix + 'HELP') {
        message.channel.send('```-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- \n -Clear   = Untuk membersihkan chat di channel ! \n -Ping    = Untuk menyetabilkan ping kamu ! \n -Invite  = Untuk menginvite bot ini ke server kamu !\n -Info    = Untuk mengetahui info tentang Hyperter ! \n -Update  = Untuk cek update BOT feature baru !\n \n Jika kamu perlu bantuan ketikan command: -help \n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ```');
     
    }
    
    if (msg === prefix + 'UPDATE') {
        message.channel.send('``` Feature baru akan diperbarui! \n Tanggal: 06-04-2018 \n Pukul: 14:00 \n\n Terimakasih Telah menggunakan bot ini```')

    if (msg.startsWith(prefix + 'CLEAR')) { 

        async function purge() {
            message.delete(); 

            if (!message.member.roles.find("name", "LEADER")) { 
                message.channel.send('Kamu membutuhkan ROLE \`LEADER\` untuk menggunakan command ini.'); 
                return; 
            }

            if (isNaN(args[0])) {
                message.channel.send('```Gunakan command dengan benar. \n Contoh: ' + prefix + 'Clear <angka>```'); 
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); 
            message.channel.send('```Chat telah di bersihkan !```'); 

        }

        purge(); 
    }
    
    
});

client.login(process.env.BOT_TOKEN);
