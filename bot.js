const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.say('pong');
  	}
});

client.on('message', message => {
    if (message.content === '@ʚɞ･ﾟ・Zephypie~, pong') {
    	message.say('ping');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
