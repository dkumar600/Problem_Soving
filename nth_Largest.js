/**
 * To find the second largest number in an array
 * Step 1: Take array into function.
 * Step 2: Initialize a loop and check if first number is greater than second
 * Step 2.1: if yes, goto second element and compare it with next to that. if No, store it into variable goto next variable until last element of array.
 * Step 3: Initialize a loop and look for second biggest element by comparing it to largest number.
 */
function nth_Largest(arr,k){
    let n;
    let biggest =arr[0];
    let al_Coppied={};
    al_Coppied['q']='q';
    for(let i=0;i<k;i++){
        biggest =arr[i];
        for(let j=i+1;j<arr.length;j++){
            console.log(al_Coppied)
            if(arr[j]>biggest && !(arr[j] in al_Coppied)){
                biggest = arr[j];
                n=j;
            }
        }
        al_Coppied[biggest]=n;
        arr[n]=arr[i];
        arr[i]=biggest;
    }
    return biggest;
}
let arr = [1,1,1,2,2,2,3,3,4,4];
let k=2;
console.log(nth_Largest(arr,k));