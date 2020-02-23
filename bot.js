const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

let time = 0; // Time in minutes

setInterval(async () => {
  time += 1; // Add one minute to the above defined variable
  await client.user.setPresence({
    game: {
      name: `Gamename for ${time} minutes`,
      type: 0
    }
  });
}, 60000);

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('hi')
  	}
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.channel.send('ping');
  	}
});

client.on('message', message => {
    if (message.content === 'uptime') {
        message.channel.send

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
