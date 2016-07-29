var TransformStream = require('./transformStream.js'),
    fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));
var inputFile = argv.input;
var outputFile = argv.output;
//console.dir(argv);

var rs = fs.createReadStream(inputFile);
var ws = fs.createWriteStream(outputFile);
var ts = new TransformStream();

rs.pipe(ts).pipe(ws);