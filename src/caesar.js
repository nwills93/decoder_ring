// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
   // your solution code here
    //input refers to the message to be decoded or encoded.
    //shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) 
    //whereas a negative number means shifting to the left (i.e., M becomes K).
    //encode refers to whether you should encode or decode the message. By default it is set to true.
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) return false
    if(!encode) shift = -shift
    const message = input.toLowerCase()
    let codedMessage = []
    for (let i = 0; i < message.length; i++) {
      let letter = message[i]
      if(alphabet.includes(letter)) {
        let shiftedCharCode = message.charCodeAt(i) + shift
        if (shiftedCharCode < 97) shiftedCharCode += 26
          
      
        else if (shiftedCharCode > 122) shiftedCharCode -= 26
          
      
    
      let codedLetter = String.fromCharCode(shiftedCharCode)
      codedMessage.push(codedLetter)
      }
      else {
        codedMessage.push(letter)
      }     
    }
    return codedMessage.join("")
  }
    // const messageArray = message.split("")
    // console.log(messageArray)
    // console.log(shift)
    // let shiftedNumbersArray = messageArray.map(letter => {
    //   alphabet.map(alphabetLetter => {
    //     if (letter === alphabetLetter) {
    //      conosole.log(letter.charCodeAt(0))
    //     }
    //   })
    // })
    // console.log(shiftedNumbersArray)
    //should loop thru every character in the input message
    // your solution code here
    // in order to wrap around to go back to either the front or the end of the aplhabet you can add or subtract 26 so that it stays with in the confines of the aplhabet index [1-26]
    //use input.toLowerCase() so that all inputs return a lowercase message.

  

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
