const { Client, GatewayIntentsBits } = require(discord.js);

const client = new Client({
    intents: [
        GatewayIntentsBits.Guilds,
        GatewayIntentsBits.GuildMessages,
        GatewayIntentsBits.MessageContent
    ]
});

const token = '';

client.on('ready', () =>{
    console.log('${client.user.tag} succefully loaded !')
});
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === 'hello') {
    message.reply('hello');
  }
});

client.login(token);
