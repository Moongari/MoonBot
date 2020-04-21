require('dotenv').config()
const Discord = require('discord.js')
const Bot = new Discord.Client()
const fs = require('fs');



const token =process.env.Token;
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