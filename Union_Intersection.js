/*

  Unique values only from 2 arrays i.e. union values
  const inputA = [1, 2, 3, 4, 10, 1];
  const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
  
  // Output
  [1, 2, 3, 4, 5, 6, 7, 8];
  
  * Step 1 - Take Two Arrays as arguments and one object for data storing
  * Step 2 - Initialise a for loop and check from both arrays if that element exist in the object if yes, continue.
  * Step 2.1 - if No, insert the element into a new array.
  * Step 3 - return the new array.

*/
function uNion(arr, arr1){
  let obj ={};
  let array1 = [];
  let length = arr.length <= arr1.length ? arr1.length : arr.length;
  for (let i=0, j=0, c=0;i<length;i++,j++){
    if(!(arr[i] in obj) && i<arr.length ){
      obj[arr[i]] = i;
      array1[c] = arr[i];
      c++;
    }
    if(!(arr1[j] in obj) && j<arr1.length ){
      obj[arr[j]] = j;
      array1[c] = arr1[j];
      c++;
    }
  }
   return array1;
  
}
const inputA = [1, 2, 3, 4, 10, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
console.log("Union : "+uNion(inputA,inputB));

/*

  Unique values only from 2 arrays i.e. intersection values
  const inputA = [1, 2, 3, 4, 10, 1];
  const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
  
  // Output
  [1, 2, 3, 4, 5,];
  
  * Step 1 - Take Two Arrays as arguments and one object for data checking and an array for storing
  * Step 2 - Initialise a for loop store all the elements from small array.
  * Step 3 - Initialise a for loop and check for element in bigger array if that element exist in the object if yes, store in separate array.
  * Step 2.1 - if No, continue.
  * Step 3 - return the new array.

*/
function iNtersect(arr, arr1){
  let obj ={};
  let obj1 ={};
  let array1 = [];
  for(let i = 0;i<arr.length;i++){
    if(!(arr[i] in obj)){
      obj[arr[i]] = arr[i];
    }
  }
  length = arr.length <= arr1.length ? arr1.length : arr.length;
  for(let i =0,c=0;i<length;i++){
    if(arr1[i] in obj && !(arr1[i] in obj1)){
      obj1[arr[i]] = arr1[i];
      array1[c] = arr1[i];
      c++;
    }
  }
  return array1;
}
console.log("intersection : "+iNtersect(inputA,inputB));