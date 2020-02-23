const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

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
    	message.channel.send('pong);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
