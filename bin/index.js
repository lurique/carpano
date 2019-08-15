#!/usr/bin/env node

const open = require('open');
const notifier = require('node-notifier');
const path = require('path');
const inquirer = require('inquirer');
const args = process.argv.slice(2);
const os = require('os');

/**
 * "E as boas práticas?"
 * Pega o carpano e aproveita
 */

if ( args.length === 0 ) {
  let qt = {
    type: "list",
    name: "qt",
    message: "Vc sabe o que eh carpano?",
    choices: [
      "sim",
      "nao"
    ]
  }

  return inquirer.prompt(qt).then(res => {
    if (res.qt === 'nao') return console.log('Eh meu caralho enrolado num pano');
    return console.log('😏');
  })
}

args.map((arg, index) => {
  if ( arg === '--help' ) return console.log("Meu caralho enrolado num pano - v0.0.5");
  if ( arg === '--tutorial' ) return open('https://www.youtube.com/watch?v=eeBP1wQzsm0');
  
  if ( arg === '--notify' ) {
    setInterval(() => {
      notifier.notify({
        title: `${os.userInfo().username.toUpperCase()}`,
        message: "Vc sabe o que eh carpano?",
        icon: path.join(__dirname, '../icons/icon.png'),
        sound: true
      })
  
      setTimeout(function() {
        notifier.notify({
          title: ``,
          message: "Eh meu caralho enrolado num pano!",
          icon: path.join(__dirname, '../icons/icon.png'),
          sound: true
        })
      }, 5000);
    }, 60000);
  }
});