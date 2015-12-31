const got = require('got');
const url = require('url');
const fs = require('fs');

let argv = require('yargs')
    .usage('Usage: <other-command> | $0\nor:    $0 [file]')
    .example('echo "Hello" | $0', 'upload text from stdin')
    .example('$0 text.txt', 'upload text from a file')
	.alias('r', 'raw')
    .describe('r', 'Output the link to the raw text')
    .help('h')
    .alias('h', 'help')
	.argv;

const hasteServer = process.env.HASTE_SERVER || 'http://hastebin.com';

got.post(url.resolve(hasteServer, 'documents'), {
    body: argv._[0] ? fs.createReadStream(argv._[0]) : process.stdin,
    json: true,
    headers: {
        'Content-Type': 'text/plain'
    }
})
.then(function(result) {
    if (!result.body || !result.body.key) {
        throw 'Did not receive hastebin key.';
    }
    if (argv.raw) {
        console.log(url.resolve(hasteServer, 'raw/' + result.body.key));
    }
    else {
        console.log(url.resolve(hasteServer, result.body.key));
    }
})
.catch(function(err) {
    console.error(err);
    process.exit(1);
});
