console.clear()
const Discord = require('discord.js')
const chalk = require('chalk')
const fs = require('fs');
const mkdirp = require('mkdirp');
var Unturned = new Discord.Client();
var sleep = require('system-sleep');
var readline = require('readline');
var tm = readline.createInterface(process.stdin, process.stdout);



Unturned.login("TOKEN");


// Advertising message [\nFor jumping a line]
messagetsend = ("https://discord.gg/wN67wMmypZ join!")


// SPEED
timeout = 100
// 100 =  10 messages Per Second (Good if you use a bot)
// 1000 = 1 message per Second
// 2000 = 1 message every 2 seconds
// 3000 = 1 message every 3 seconds (are better if you use this code like a self bot)

// WARNING ------------

// Don't use the code with your first account because after advertising everyone your account will get banned ;)

// WARNING ------------

Unturned.on('ready', () => {
   console.log(`Statistiques globales : \n\nThe bot have a total of ${Unturned.guilds.size} servers. \nFor a total of ${Unturned.users.size} members. \n\nMessage :\n\u001b[36m${messagetsend}\u001b[0m\n\n\n `)
   tm.question('\u001b[0mTape \u001b[32mENTER \u001b[0mfor launch UnturnedDM\n\n', (answer) => {
      dmed = "0"
      Unturned.users.forEach((member) => {
         dmed++
         sleep(timeout);
         member.send(messagetsend).catch(O_o => {})
         console.log("\u001b[31;1m[" + dmed + "/" + Unturned.users.size + "]\u001b[37m Message sended to \u001b[36m" + member.username + "#" + member.discriminator)
         if (dmed == Unturned.users.size) {
            console.log("\u001b[32mUnturnedDM finished succesfully ! \nKeep the bot on so that it finishes 100%")
         }
      })
   })
})

process.on("unhandledRejection", error => {

      if (error) {
         console.log("Token invalid")
      } else {
         console.error(error);
      }
   
});
