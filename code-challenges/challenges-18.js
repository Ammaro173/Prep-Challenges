'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
  //   let middle = parseInt(str.length / 2, 10);
  //   return str[middle];
  //   const i = Math.floor(str.length / 2);
  /////////////////////////
  //   let result = str[i];
  //   if (str.length % 2 === 0 && i > 0) {
  //     result = str[i - 1] + result;
  //   }
  //   return result;
  //   ///////////////////
  const output = str.split(' ');
  return output[Math.floor(output.length / 2)].length;
  //
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
  ////////// WHY CANT USE .SORT???????
  if (str1 === str2) {
    return true;
  }

  let srt1Length = str1.length;
  let srt2Length = str2.length;

  if (srt1Length !== srt2Length) {
    return false;
  }

  var counts = {};

  for (let i = 0; i < srt1Length; i++) {
    let index = str1.charCodeAt(i) - 97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for (let j = 0; j < srt2Length; j++) {
    let index = str2.charCodeAt(j) - 97;
    if (!counts[index]) {
      return false;
    }
    counts[index]--;
  }

  return true;
};

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
  // write your code here
};
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };
