const besmelehCounts = require('./data/besmeleh_counts.json');
const verseCounts = require('./data/verse_counts.json');
const suras = require('./data/suras.json');
const verses = require('./data/verses.json');

class Parser {
  constructor() {
    this.quran = {};
    this.suras = suras;
    this.verses = verses;
  }

  getQuranTree() {
    return {
      suras: this.suras
      .map((sura, i) => {
        if(sura) {
          return {
            sura,
            number: i,
            ayahs: this.getVerses(i).map((verse, j) => {
              return {
                ayah: verse,
                number: (j+1)
              }
            })
          }
        }
      })
      .filter((sura) => !!sura)
    };
  }

  getVerses(suraNumber) {
    let i;
    let offset = 1;
    for(i=1; i<suraNumber; i++) {
      offset += verseCounts[i] + besmelehCounts[i];
    }

    return this.verses.slice(offset,(offset + verseCounts[i]));
  }

  getSurahByVerse(verseIndex) {
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
