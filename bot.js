import discord
from discord.ext.commands import Bot
from discord.ext import commands
import time
import datetime

start_time = time.time()
bot_version = "The bot is in BETA v0.1"

client = Bot("~")

#Startup message

@client.event
async def on_ready():
    print("===================================")
    print("Logged in as")
    print("Username: %s"%client.user.name)
    print("ID: %s"%client.user.id)
    print('Server count:', str(len(client.servers)))
    print("Py Lib Version: %s"%discord.__version__)
    print(f"Bot Version: {bot_version}")
    print("===================================")


#ping
@client.command(aliases=['p'])
async def ping():
    pingtime = time.time()
    pingms = await client.say("Please wait . . . ")
    ping = time.time() - pingtime
    await client.edit_message(pingms, "```Pong!◕ Mengetes PING dalam waktu [%.01f] detik ```" % ping)

#server
@client.command(pass_context = True)
async def server(ctx):
    x = '\n'.join([str(server) for server in client.servers])
    print(x)
    embed = discord.Embed(title = "Servers", description = x, color = 0xFFFFF)
    return await client.say(embed = embed)

#command9
@client.command(pass_context = True)
async def info(ctx):
    await client.say("""```css
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Hai BOT ini hanya uji Test saja bro...
Bot akan on jika pemilik ON juga :D
Jadi masih di ujitest Mohon maaf ya

Created by: VerterID
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

```""")

#command10
@client.command(pass_context = True)
async def bantuan(ctx):
    await client.say("""```css
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                  -=COMMAND HYPERTER=-

~Help             = Memberikan bantuan command !
~clear <angka>    = Membersihkan Chat Server !
~ping             = Mengetes Ping kalian !
~info             = Memberi Info jelas BOT ini !
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

```""")

#command5
@client.command(pass_context=True)       
async def clear(ctx, number):
    mgs = []
    number = int(number) #Converting the amount of messages to delete to an integer
    async for x in client.logs_from(ctx.message.channel, limit = number):
        mgs.append(x)
    await client.delete_messages(mgs)
    await client.say("""```css
Hai!! Chat server telah dibersihkan :D```""")
client.login(process.env.BOT_TOKEN);
