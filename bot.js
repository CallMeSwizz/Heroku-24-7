const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.user.setPresence({ 
    status: 'online', game: { 
        name: 'GAME HERE'
    } 
});
client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('hi')
  	}
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.channel.send('pong);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
