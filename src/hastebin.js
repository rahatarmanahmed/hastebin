var got = require('got')
var url = require('url')

function createPaste (content, options, gotOptions) {
  gotOptions = gotOptions || {}
  if (typeof content !== 'string') {
    return Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.'))
  }

  if (content === '') {
    return Promise.reject(new Error('You cannot send nothing.'))
  }

  var hasteServer = (options ? options.server : null) || 'https://hastebin.com'
  var postUrl = url.resolve(hasteServer, 'documents')

  var resolvedGotOptions = Object.assign({
    body: content,
    json: true,
    headers: {
      'Content-Type': (options ? options.contentType : null) || 'text/plain'
    }
  })

  return got(postUrl, resolvedGotOptions).then(function (result) {
    if (!result.body || !result.body.key) {
      throw new Error('Did not receive hastebin key.')
    }

    if ((options ? options.raw : null)) {
      return url.resolve(hasteServer, 'raw/' + result.body.key)
    } else {
      return url.resolve(hasteServer, result.body.key)
    }
  })
}

exports.createPaste = createPaste
