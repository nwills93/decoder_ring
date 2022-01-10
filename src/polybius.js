// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // how to make the polybius square?
  //construct the square by making 5 arrays. Each array is the next row in the square. to access the
  const polybiusArray = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  function polybius(input, encode = true) {
    if (encode) {
      let numberString = "";
      const message = input.toLowerCase()
      for (let letter of message) {
        polybiusArray.map((row) => {
          if (row.includes(letter)) {
            let gridNumbers =
              (row.indexOf(letter) + 1).toString() + (polybiusArray.indexOf(row) + 1).toString()
               numberString += gridNumbers;
          }
        });
        if (letter === " ") {
          numberString += letter;
        } else if (letter === "j" || letter === "i") numberString += "42";
      }
      return numberString;
    }
    else if (!encode) {
      if (input.split(' ').join('').length % 2 === 1) return false
      let codedNumbers = input.split(" ")
      //console.log(codedNumbers)
      let decodedWords = []
      codedNumbers.map(numbers => {
        let answer = ""
          //console.log(numbers) 
          for (let i = 0; i < numbers.length; i += 2) {
              column = numbers[i] - 1
              row = numbers[i + 1] - 1
              let letter = polybiusArray[row][column]
              answer += letter  
            }
            //console.log(answer)
          decodedWords.push(answer)
          })
      //console.log(decodedWords.join(" "))
      return decodedWords.join(" ")
  }
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
