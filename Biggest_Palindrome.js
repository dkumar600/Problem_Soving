/**
 * Find the following
    - Largest Palindrome in a given string
    - All Palindrome in a string

    Ex - "Hello Mam, how are you. Madam, do you know racecar?
    1- "racecar"
    2- ["mam", "madam", "racecar"]

  * Step 1 - Take String Input Variable "a" and Compare if length of a is more than 0,if false return "Invalid".
  * Step 2 - Convert whole string a into lowercase.
  * Step 3 - Slice all the words into An Array Variable "v".
  * Step 4 - Using map function, remove symbols from words store it into "v". 
  * Step 5 - Using filter function, check for every words' first and last letter store it in a new array "v1".
  * Step 6 - Using filter function, check every word of v1 and if palindrome store it into array "v". 
  * Step 7 - Make a function to check which palindrome word is largest and return it as largestPalindrome.
  * Step 8 - Create an Object and Store both list of pallindrome and largest paildrome in it and return as result.
 */

function largestP(a){
  let v = a.toLowerCase().split(" ");
  let func2 = (c) => { // for filtering symbols from words
    let len = c.length;
    let letchar;
    if(!(c.charCodeAt(len-1) >= 97 && c.charCodeAt(len-1) <= 122)){
        letchar = c.slice(0,len-1);
        return letchar
    }
    return c;
  }
  let func1 = (c) => { // for filtering palindrome like words
    let len = c.length;
    return c[0] === c[len - 1];
  }
  let func3 = (c) => { // for filtering actual palindrome words
    let len = c.length;
    for (let i = 0; i<=len/2; i++){
        if(c[i] !== c[len-i-1]){
            return false;
        }
    }
    return true;
  }
  function map2(v2){ // finding largest word
    let largestPalindrome = v2[0];
    for(let i=1; i<v2.length; i++){
        if(v2[i-1].length < v2[i].length){
            largestPalindrome = v2[i];
        }
    }
    return largestPalindrome;
  }
  v = v.map(func2);
  let v1 = v.filter(func1);
  v = v1.filter(func3);
  let actualResult = {};
  actualResult["pallin_List"] = v;
  actualResult["largest_pallin"] = map2(v);
  return actualResult;
}
console.log(largestP("Hello Mam, how are you. Madam, do you know racecar?"));