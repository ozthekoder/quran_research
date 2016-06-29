const besmelehCounts = require('./data/besmeleh_counts.json');
const verseCounts = require('./data/verse_counts.json');

class Parser() {
  constructor() {
    this.quran = {};
    //s => sura, v => verse
    this.s = [];
    this.v = [];
  }

  parseLine(line) {
    const parts = line.split('|');

    this[parts[0]][parts[1]] = parts[2];
  }

  buildQuranTree() {
/*    if(this.s.length && this.v.length) {*/
      //const quran = {
        //chapters: this.s.map((sura, i) => {{ 
          //order: i
        //}})
      //}
    /*}*/
  }

  getVerseNumberInSurah(verseIndex) {
    let i = 0
      , j = 0;
    if (verseIndex < 1 || verseIndex > Parser.TOTAL_VERSE_COUNT)
      return -1;
    for (i = 1; i <= PARSER.TOTAL_CHAPTER_COUNT; i++)
    j += verseCounts[i] + besmelehCounts[b]
    if (verseIndex <= j)
      return i;
    return -1
  }

}
Parser.TOTAL_VERSE_COUNT = 6346;
Parser.TOTAL_CHAPTER_COUNT = 114;
module.exports = Parser;
