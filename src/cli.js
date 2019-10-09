#!/usr/bin/env node
var fs = require('fs')
var hastebin = require('./hastebin')
var getStream = require('get-stream')

var argv = require('yargs')
  .usage('Usage: <other-command> | $0\nor:    $0 [file]')
  .example('echo "Hello" | $0', 'upload text from stdin')
  .example('$0 text.txt', 'upload text from a file')
  .alias('r', 'raw')
  .describe('r', 'Output the link to the raw text')
  .help('h')
  .alias('h', 'help')
  .argv

getStream(argv._[0] ? fs.createReadStream(argv._[0]) : process.stdin).then(function (input) {
  hastebin.createPaste(input, {
    raw: argv.r
  })
    .then(function (url) {
      console.log(url)
    })
})
