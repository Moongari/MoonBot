const Discord = require('discord.js')
const Bot = new Discord.Client()
const fs = require('fs');


const token = 'NzAyMjMyNjUwNzU2MjU5OTUw.Xp9gSg.yBAAJAU-9W04SKSM_6BaAMqxVt8';
const prefix = '!';

Bot.on('ready', () => {
    
    console.log('My bot is ready !');

})

Bot.on('message', msg => {
    
    let args = msg.content.substring(prefix.length).split(" ");


    switch (args[0]) {
        
        case 'Help':
            msg.channel.send('What can i do for you ?')
                .then(() => console.log(`Sent a reply to ${msg.author.username} ${msg.author.discriminator}`))
                .catch(console.error);
            break;
    }

})




Bot.login(token);