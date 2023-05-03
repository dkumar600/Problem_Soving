/**
        To check whether particular word/number present in sentence or not using inbuilt function

        String - Hello my name is Ankit
        Test Case - "funny"
        Output - False

        String - Hello my name is Ankit
        Test Case - "ankit"
        Output - false
    * Step 1 - split sentence into array.
    * Step 2 - compare array with word by using if
    * Step 3 - return value true if found otherwise false
 */
function word_present(word,test){
    let arr = test.split(' ');
    for(let i=0;i<arr.length;i++){
        if(arr[i]===word){
            return true;
        }
    }
    return false;
}
console.log(word_present('word','this word is not exact match.'));