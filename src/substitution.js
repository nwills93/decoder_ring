// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  function isUnique(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (obj[letter]) return false;
      obj[letter] = true;
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26) return false
    const uniqueAlph = isUnique(alphabet);
    if (!uniqueAlph) return false;
    if(encode) {
      let message = input.toLowerCase()
      let codedMessage = ""
      for (let letter of message) {
        if(letter === " ") {
          codedMessage += letter
        }
        else if(letters.includes(letter)) {
          let codedLetterIndex = letters.findIndex(cipherLetter => cipherLetter === letter)
          codedMessage += alphabet[codedLetterIndex]
        }
      }
      return codedMessage
    }
    if(!encode) {
      let message = input.toLowerCase()
      let decodedMessage = ""
      for (let letter of message) {
        let splitAlphabet = alphabet.split("")
        if (letter === " ") decodedMessage += letter
        else if(alphabet.includes(letter)) {
          let letterIndex = splitAlphabet.findIndex(codedLetter => letter === codedLetter)
          decodedMessage += letters[letterIndex]
        }
      }
      return decodedMessage
    }
  }
    

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
