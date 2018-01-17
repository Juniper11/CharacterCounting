var countLetters = function countLetters(letters) {
    var letterCounts = {}
   
   
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      
      if (letter !== ' ') {
      letterCounts[letter] = 1;
      letterCounts[letter] += 1; 
      }
    }
    return letterCounts;
   }
   
   //console.log(countLetters(“”));
   //console.log(countLetters(”    “));
   //console.log(countLetters(“lighthouse in the house”));
   //console.log(countLetters("lighthouse in the house”));
    console.log(countLetters('lighthouse in the house'));