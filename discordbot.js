const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const token = '';

client.on('ready', () => {
    console.log(`${client.user.tag} successfully loaded !`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === 'hello') {
        message.reply('hello');
    }
});

client.login(token);
