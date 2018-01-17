var countLetters = function countLetters(letters) {
    var letterCounts = {}
   
   
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      var total = 1;
      if (letter !== ' ') {
      letterCounts[letter] = total;
      letterCounts[letter] += total; 
      }
    }
    return letterCounts;
   }
   
   //console.log(countLetters(“”));
   //console.log(countLetters(”    “));
   //console.log(countLetters(“lighthouse in the house”));
   //console.log(countLetters("lighthouse in the house”));
    console.log(countLetters('lighthouse in the house'));