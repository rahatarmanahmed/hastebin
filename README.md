# hastebin

[![Greenkeeper badge](https://badges.greenkeeper.io/rahatarmanahmed/hastebin.svg)](https://greenkeeper.io/)

CLI tool that uploads text to hastebin. (Basically a Node.js version of [haste-client](https://github.com/seejohnrun/haste-client))

## Installation

To install from npm, run

`npm install -g hastebin`

## Usage

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

## Example

```sh
$ echo "hi" | hastebin
http://hastebin.com/ilitixevat
```

## Custom server

By default, hastebin will point to `http://hastebin.com`. You can set the `HASTE_SERVER` environment variable to configure this.

```sh
alias work_haste="HASTE_SERVER=http://something.com haste"
```

## Building

To compile the source just run `npm run build`.

