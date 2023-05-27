var topKFrequent = function(nums, k) {
    let arr={};
    let val = nums[0];
    let arr1=[];
    let count=1
    arr[val]=count;
    for(let i=1;i<nums.length;i++){
        if(val==nums[i] || `${nums[i]}` in arr){
            arr[nums[i]]+=1;
            
        } else{
            val=nums[i];
            count=1;
            arr[val]=count
        }
    }
    nums=Object.keys(arr);
    for(let i=1;i<=k;i++){
        val = arr[`${nums[0]}`];
        count=0;
        for(let j=1;j<nums.length;j++){
            if(arr[`${nums[j]}`]>val){
                val=arr[`${nums[j]}`];
                count=j;
                
            }
        }
        arr1.push(Number.parseInt(nums[count]));
        nums.splice(count, 1);

    }
    return arr1;
};