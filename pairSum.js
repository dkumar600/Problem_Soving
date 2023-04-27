/**
 * 
 * @param {*} arr 
 * @param {*} x 
 * @returns 
 * - To find a first pair from a number array whose sum is X
 *  X = 5
 *  arr = [1,2,3,4,5,6] // 2,3
 * Step 1 - find the smallest one and filter all the element that bigger some than value X
 * Step 2 - Initialize an empty object and a loop store all index from the array that has sum equal to x,
 * Step 3 - Store first pair from stored value of the object. 
 */
function pairSum(arr,x){
    let smallest = (arr) => {
      let sml = arr[0];
      for(let i = 1; i<arr.length;i++){
        if(sml>arr[i]){
          sml = arr[i];
        }
      }
      return sml;
    }
    smallest = smallest(arr);
    let arr1 = arr.filter(a => x >= a+smallest);
    let firstPair = {};
    firstPair.pair1 =[];
    firstPair.allPair = [];
    firstPair[x-arr1[0]] = 0;
    for(let i = 1; i<arr1.length; i++){
      if(arr[i] in firstPair){
        let a = [firstPair[arr[i]],i];
        firstPair.allPair.push(a);
      }
      else{
        firstPair[x-arr1[i]] = i;
      }
    }
    firstPair.pair1 = firstPair.allPair[0];
    firstPair1 = {};
    firstPair1.pair1 = firstPair.pair1;
    firstPair1.allPair = firstPair.allPair;
    return firstPair1;
  }
  console.log(pairSum([1,2,3,4,5,6],5));