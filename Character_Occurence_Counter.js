function occurenceCounter(a){
    /**
     * AAAABBBCCD -> 4A3B2C1D
     * take string 
     * capitalize string
     * take array of length 26 and initialize with zero
     * initialize a loop with i,
     *    take ith letter of string
     *    convert it into ascii and subtract it from 65;
     *    now put the value as index of array and increase the value of array by 1
     * do it untill string length 
     * initilize a string str.
     * initialize loop from 0 to the length of array c
     *      for every value that is not zero store into str with respective character.
     * return str.
     */
    let c = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    a = a.toUpperCase();
    for(let i=0;i<a.length;i++){
      c[a.charCodeAt(i)-65] += 1;
    }
    let str='';
    for(let i=0;i<26;i++){
      if(c[i] != 0){
        str+=String.fromCharCode(i+65) +''+ c[i];
      }
    }
    return str;
  
}

console.log(occurenceCounter("AAAaaaBBABBAXXxxCY"));