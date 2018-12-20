const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});






client.on("message", msg => {
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;

let p = "!";
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);

if(cmd === `${p}ban`){
    let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!bUser) return msg.channel.send("Can't find user!");
let breason = args.join(" ").slice(22);
if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("No can do pal!");
if(bUser.hasPermission("BAN_MEMBERS")) return msg.channel.send("That person can't be banned");

let banembed = new Discord.RichEmbed()
.setDescription("~ban~")
.setColor("BLACK")
.addField("banned User", `${bUser} with ID: ${bUser.id}`)
.addField("banned By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
.addField("banned In", msg.channel)
.addField("Time", msg.createdAt)
.addField("Reason", breason)

let banChannel = msg.guild.channels.find("name","اسم الروم");
if(!banChannel) return msg.channel.send("Can't find `اسم الروم` channel.");

msg.guild.member(bUser).ban(breason);
banChannel.send(banembed)
    return;
}


});







client.login(process.env.BOT_TOKEN);
