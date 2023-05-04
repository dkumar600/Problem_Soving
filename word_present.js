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
    let counter;
    for(let i=0;i<test.length;i++){
        counter=0;
        if(word[0]==test[i]){
            counter=1
            for(j=i+1,c=1;c<word.length;j++,c++){
                if(word[c]==test[j]){
                    counter++;
                    console.log(counter);
                }
            }
            if(counter==word.length){
               return true
            }
        }
    }
    return false;
}
console.log(word_present(' maTch','this word is not exact match.'));