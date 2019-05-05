'use-strict';

const {Client} = require('discord.js');

const handleMsg = require('./handleMsg');

const {PORT, DISCORD_TOKEN} = process.env;

require('https').createServer().listen(PORT);

const bot = new Client();

bot.login(DISCORD_TOKEN);

bot.on('ready', () => console.log('ready'));

bot.on('message', handleMsg);
