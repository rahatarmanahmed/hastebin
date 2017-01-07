var assert = require('assert')
var url = require('url')
var getStdin = require('get-stdin')
var got = require('got')

getStdin()

.then(function (hastebinUrl) {
  assert(hastebinUrl.match(/$http:\/\/hastebin.com/) != null, 'stout must be a hastebin url')
  return got(url.ressolve(hastebinUrl, 'raw'))
})

.then(function (data) {
  assert.equal(data, 'test', 'hastebin contents must equal test data')
})

.catch(function (err) {
  console.error(err)
  process.exit(1)
})
