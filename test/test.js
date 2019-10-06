var assert = require('assert')
var getStdin = require('get-stdin')
var got = require('got')
var jsapi = require('../src/hastebin')

var testData = 'test'

function testOutput (input) {
  var hastebinUrl = input.trim()
  assert(hastebinUrl.match(/^https:\/\/hastebin.com\/.*/) != null, 'output must be a hastebin url')
  var key = hastebinUrl.split('/').slice(-1)[0]
  return got('https://hastebin.com/raw/' + key)

  .then(function (result) {
    assert.equal(result.body.trim(), testData, 'hastebin contents must equal test data')
  })
}

console.log('testing stdin...')
getStdin().then(testOutput).then(function () {
  console.log('testing jsapi non-raw...')
  jsapi.createPaste(testData).then(testOutput)
  .then(function () {
    console.log('testing jsapi raw...')
    jsapi.createPaste(testData, { raw: true }).then(testOutput)
  })
})
