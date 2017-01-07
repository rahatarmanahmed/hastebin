var assert = require('assert')
var getStdin = require('get-stdin')
var got = require('got')

getStdin()

.then(function (stdin) {
  var hastebinUrl = stdin.trim()
  assert(hastebinUrl.match(/^https:\/\/hastebin.com\/.*/) != null, 'stout must be a hastebin url')
  var key = hastebinUrl.split('/').slice(-1)[0]
  return got('https://hastebin.com/raw/' + key)
})

.then(function (result) {
  assert.equal(result.body.trim(), 'test', 'hastebin contents must equal test data')
})

.catch(function (err) {
  console.error(err)
  process.exit(1)
})
