const Parser = require('./parser');
var program = require("ast-query");
const parser = new Parser();
const readline = require('readline');
const fs = require('graceful-fs');
//console.log(JSON.stringify(parser.getVerses(27), null, 2));
console.log(JSON.stringify(parser.getQuranTree(), null, 2));
fs.writeFileSync('./lib/data/quran.json', JSON.stringify(parser.getQuranTree(), null, 2))
/*fs.readFile('./lib/data/submission.js', 'utf8', (err, code) => {*/
  //if(err) {
    //throw err;
  //}
  //var tree = program(code);
  //console.log(tree.toString());
//});

