const Discord = require('discord.js');

const botToken = 'BOT_TOKEN';
const channelId = 'CHANNEL_LOGS_ID';

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Discord Bot connected.');
});

client.on('message', (message) => {
  if (message.channel.id === channelId) {
    console.log('Attack received:', message.content);
  }
});

client.login(botToken).catch((error) => {
  console.error('Error connecting with discord bot:', error);
});
