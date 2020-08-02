// String-1 -- startWord
// https://the-winter.github.io/codingjs/exercise.html?name=startWord&title=String-1

// Given a string and a second "word" string, we'll say 
// that the word matches the string if it appears at the 
// front of the string, except its first char does not 
// need to match exactly. On a match, return the front 
// of the string, or otherwise return the empty string. 
// So, so with the string "hippo" the word "hi" returns 
// "hi" and "xip" returns "hip". The word will be at 
// least length 1.

// Examples

// startWord('hippo', 'hi') → hi
// startWord('hippo', 'xip') → hip
// startWord('hippo', 'i') → h

const startWord = (str, word) => {
    if (str === "") {
        return ""
    } else if (word.length === 1) {
        return str[0];
    }
    let wordLength = word.length
    let splitWord = word.split('')
    let slicedWord = splitWord.slice(1, splitWord.length)
    let joinedSlicedWord = slicedWord.join('')
    let match = new RegExp(`\\w${joinedSlicedWord}`);
    if (match.test(str)) {
        return str.split('').slice(0, wordLength).join('')
    }
    return ""
}

console.log(startWord("hippo", "hi"));
console.log(startWord("hippo", "xip"));
console.log(startWord("hippo", "i"));