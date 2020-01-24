(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  let max = (num1, num2) => {

    if (num1 < num2) {
      console.log(num2);

    } else {
      console.log(num1);
    }

  }
  max(10, 20);

  // console.assert(max(10, 12) === 10, 'error: max function'); //lets you log into console only if returns false.


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  let maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
      console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
      console.log(num2);
    } else if (num3 > num1 && num3 > num2) {
      console.log(num3);
    }
  }
  maxOfThree(20, 3, 12);

  // OR**********
  // let maxOfThree = (num1, num2, num3) => {
  // return Math.max(num1, num2, num3);
  // }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  let isVowel = (string) => {
    if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u' || string === 'y') {
      console.log("It's a vowel!")
    } else {
      console.log("It's a consonant, not a continent!")
    }
  }

  isVowel('k');


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  let rovarspraket = (str) => {



    for (let i = 0; i < str.length; i++) {
      let newStr = '';
      let char = str.charAt(i);
      if (char !== 'a' || char !== 'e' || char !== 'i' || char !== 'o' || char !== 'u' || char !== 'y'); {
        console.log(newStr.concat(char + 'o' + char));
      }
      return newStr;
    }
  }
  rovarspraket('im a string'); //I've got this to console log the first letter and concatenate a new string correctly.
  //but what about the rest of them?

  // let rovarspraket = (str) => {
  //    let consonants = "bcdfghjklmnpqrstvwxyz";
  //    let result = '';
  //
  //    for (let i = 0; i < str.length; i++) {
  //      if (!consonants.includes(str[i])) {
  //        result += str[i];
  //      } else {
  //        result += str[i] + 'o' + str[i];
  //      }
  //    }
  //    return result;
  // }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  let sum = (array) => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue; {
      console.log(array.reduce(reducer));
    }
  }
  sum([1, 2, 3, 4]);

  let multiply = (array) => {
    let reducer = (accumulator, currentValue) => accumulator * currentValue;

    {
      console.log(array.reduce(reducer));
    }
  }
  multiply([1, 2, 3, 4]);
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  let reverse = (str) => {
    let result = str.split('').reverse().join('');
    console.log(result);
  }
  reverse('this should be backwards');



  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  //need to iterate through the array counting length of each item.
  //how do I count the length of each string in an array??
let findLongestWord = (arr) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++){
      if (arr[i].length > j) {
        j = arr[i].length;
      }
    }
    console.log(j);
    return j;
  }
findLongestWord(['arrays', 'of', 'strings']);


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  let filterLongWords = (arr, i) => {
    let theLongest = [];
    for (let j = 0; j < arr.length; j++){
      if (arr[j].length > i){
        theLongest.push(arr[j]);
      }

    }

    return theLongest
  }

  console.log(filterLongWords(["this", "an", "interesting", "topic"], 5));


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  let charFreq = (str) => {
    let result = {};
    for (let i = 0; i < str.length; i++) {
      if (result[str[i]]) {
        // character exists
        result[str[i]] += 1
      } else {
         // character does not exist
        result[str[i]] = 1
      }
    }
    console.log(result);
    return result;

  }

  console.assert(charFreq('aaabbeeeffl').a === 3);



})();
