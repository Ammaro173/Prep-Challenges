'use strict';

// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
  let face = '^_^';
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(face) !== -1) {
      result[i] = arr[i];
    }
  }
  return result;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
  let newString = '';
  for (let i = 0; i < str.length; i += 2) {
    newString += str[i];
  }
  return newString;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];

const chickenGradients = (arr) => {
  ////// solution 1 !
  // let chk = 'chicken';
  // let result = [];

  // arr.map((ele) => {
  //   ele.map((e) => {
  //     if (e.indexOf(chk) !== -1) {
  //       result.push([e]);
  //       console.log(result);
  //     }
  //   });

  ////// solution 2 !!
  let chk = 'chicken';
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j].indexOf(chk) !== -1) {
        result.push([arr[i][j]]);
        console.log(result);
      }
    }
  }
  // console.log(ele);
  // if (ele[i].indexOf(chk) !== -1) {
  //   result[i] = ele[i];
  //   console.log(result)
  // }
  // });

  return result;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };

//
