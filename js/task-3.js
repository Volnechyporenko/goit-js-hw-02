const findLongestWord = function(string) {
    const transformString = string.split(' ');
    let wordsLength = [];
    for (let i = 0; i < transformString.length; i++) {
        wordsLength.push(transformString[i].length);
    }
    const wordIndex = wordsLength.indexOf(Math.max(...wordsLength));

    return transformString[wordIndex];

  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'