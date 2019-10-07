# hastebin

CLI tool that uploads text to hastebin. (Basically a Node.js version of [haste-client](https://github.com/seejohnrun/haste-client))

## Installation

To install this package globally using NPM, run:
`npm install -g hastebin`

To try this package out before you install, try `npx hastebin`.

To install this package locally, try `npm i hastebin`. You can then access the `hastebin` client via NPM scripts.

## Usage

### Via the Shell

```sh
$ hastebin --help
Usage: <other-command> | hastebin
or:    hastebin [file]

Examples:
  echo "Hello" | hastebin    upload text from stdin
  hastebin text.txt          upload text from a file


Options:
  -r, --raw   Output the link to the raw text
  -h, --help  Show help                      
```

#### Example

```sh
$ echo "hi" | hastebin
http://hastebin.com/ilitixevat
```

---

### Via the JavaScript API

```js
var hastebin = require('hastebin')

hastebin.createPaste('content for your paste', {
  raw: true,
  contentType: 'text/plain',
  server: 'https://hastebin.com'
}, /* options for the 'got' module here */ {})
  .then(function (urlToPaste) {})
  .catch(function (requestError) {})
```

## Custom server

By default, hastebin will point to `http://hastebin.com`. You can set the `HASTE_SERVER` environment variable to configure this.

```sh
alias work_haste="HASTE_SERVER=http://something.com haste"
```

## Building

To compile the source just run `npm run build`.

## License

This module is licensed under the MIT license.
