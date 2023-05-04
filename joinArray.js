/**
 *Input - const arr = [
  ["a", "b","c"],
  ["c", "d"],
  ["e", "f", ["g", "h", ["i", "j"]],
    ];
 *Output - ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

 *Step 1 - join array 
 *Step 2 - take two variable, one as string and one as array.
 *Step 3 - Initialize a loop to add every array element into string.
 *Step 4 - Initialize a loop to filter a commas(,) from string and store every other element into array variable
 *Step 5 - return array.
 */

 function joinSubArray(arr){
   // let array = arr.join();
   let p="";
   let p1=[];
   for(let i=0;i<arr.length;i++){
    p+=arr[i];
   }
   for(let i=0;i<p.length;i++){
    if (p[i]===','){
        continue;
    }
    p1.push(p[i]);
   }
   return p1;
 }
 const arr = [ ["a", "b","c"],["c", "d"],["e", "f", ["g", "h", ["i", "j"]]]];
 console.log(joinSubArray(arr));