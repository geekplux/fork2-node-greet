command = ->
  console.log greet(argv._, argv.drunk)
  return
argv = require("minimist")(process.argv.slice(2))
greet = require("./index.js")
module.exports = command