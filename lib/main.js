
var argv = require('minimist')(process.argv.slice(2));
var greet = require('./index.js');

function main() {
  console.log(greet(argv._, argv.drunk));
}

module.exports = main;