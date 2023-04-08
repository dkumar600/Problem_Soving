/*
# Program to remove all the elements from array a that is in the array b.
# Step 1 : Read the length of array a and array b and initialize array c.
# Step 2 : check if array is empty, if yes print array a and check if array b is empty retrun array a
# Step 3 : Based previous step 2, check if lesser array element != greater array element.
# Step 3.1 : if yes, put value in  array c [x] and increase the value of x by 1.
# Step 3.2 : repeat the step 3 until lesser array's length.
# Step 3.4 : copy values of c into a and reset the value of c and value of x.
# Step 3.5 : repeat the until greater array's length.
# Step 4: return the value of a.
*/
function arrayDiff(a, b) {
    let c=[];
    let x=0;
    if(a==[] || b==[]){
      return a;
    }
    for (let i=0;i<b.length;i++){
      for (let j=0;j<a.length;j++){
        if (a[j] != b[i]){
          c[x]=a[j];
          x++;
        }
      }
      console.log(a)
      a=c;
      c=[];
      x=0;
      console.log(c)
    }
    return a;
  }