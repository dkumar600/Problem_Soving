/**
 *Input - const arr = [
  ["a", "b","c"],
  ["c", "d"],
  ["e", "f", ["g", "h", ["i", "j"]],
    ];
 *Output - ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

 *Step 1 - join array 
 *Step 2 - return array.
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