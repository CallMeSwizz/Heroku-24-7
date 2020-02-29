const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('Pong!')
  	}
});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} server`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
