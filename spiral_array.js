/**
 * Make simple array into spiral array.
 * input :[[1,2,3],
 * [5,6,7],
 * [9,10,11],
 * [13,14,15]]
 * Output: [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10] 
 * Step 1: Read Two Dimensional Array.
 * Step 2: store first row by initializing by a loop and by going right 
 * Step 3: second loop will store end column's element by going down.
 * Step 4: third loop will store end rows element by going left.
 * Step 5: fourth loop will store first rows element by going up.
 * Step 6: always check if number of element stored are equal or greater than number of element present in passed array.
 * Step 6.1: if yes break from that loop;
 *  
 */
function spiralArray(arr){
    let m = arr.length;//row
    let n = arr[0].length;//column
    let i=-1;
    let j=-1;
    let arr1=[];
    let counted = m*n;
    for(let count=0;count<counted;){
        i+=1;
        j+=1;
        while(j<n){//right
            if(count>=counted || arr[i][j]=='u'){
                break;
            }
            arr1.push(arr[i][j]);
            arr[i][j]='u';
            j++;
            count++;
        }
        if(count>=counted){
            break;
        }
        j=j-1;//
        i=i+1;
        while(i<m){//down
            if(count>=counted || arr[i][j]=='u'){
                break;
            }
            arr1.push(arr[i][j]);
            arr[i][j]='u';
            i++;
            count++;
        }
        if(count>=counted){
            break;
        }
        i=i-1;
        j=j-1;
        while(j>=0){//left
            if(count>=counted || arr[i][j]=='u'){
                break;
            }
            arr1.push(arr[i][j]);
            arr[i][j]='u';
            j--;
            count++;
        }
        if(count>=counted){
            break;
        }
        j=j+1;
        i=i-1;
        while(i>=0){//up
            if(count>=counted || arr[i][j]=='u'){

                break;
            }
            arr1.push(arr[i][j]);
            arr[i][j]='u';
            i--;
            count++;
        }
    }
    return arr1;
}

const arr1 = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

console.log(spiralArray(arr1));
