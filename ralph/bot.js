var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {

    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

});

bot.on('message', function (user, userID, channelID, message, evt) {

    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.substring(0, 1) == '!') {

        var args = message.substring(1).split(' ');
        var cmd = args[0];

       

        args = args.splice(1);
        switch(cmd) {

            // !ping
            case 'ralph':

                bot.sendMessage({
                    to: channelID,
                    message: 'arf'
                });

            break;

            //case 'ralphbomb'
            // Just add any case commands if you want to..
            //    for i in 10
            
            case 'birthday':
                var name = args[1];
                name.toLowerCase();
                if (name == 'weilon' || name == 'whale') {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://i.pinimg.com/originals/58/a9/41/58a941c56e9cf84178c34f05622409fc.jpg' // Nice picture of a whale saying "Happy Birthday"
                    });
                } else {
                    bot.sendMessage({
                        to: channelID,
                        message: 'It whale birthday. Not yours. Sniffling dimwit.'
                    });
                }
         }

     }

});
