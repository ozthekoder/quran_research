const Parser = require('parser');
const parser = new Parser();
const readline = require('readline');
const surahReader = readline.createInterface({
  input: require('fs').createReadStream('./lib/data/quran_suras')
});

surahReader.on('line', function (line) {
  parser.parseLine(line);
  console.log('Sura:', line);
});

const verseReader = readline.createInterface({
  input: require('fs').createReadStream('./lib/data/quran_verses')
});

verseReader.on('line', function (line) {
  parser.parseLine(line);
  console.log('Verse:', line);
});
