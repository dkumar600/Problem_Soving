const x = num =>{
    let romanVal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanChar = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let str = '';
    let i=0;
    
    while(num>0){
        let x=num-romanVal[i];
        if(x>=0){
            str+=romanChar[i];
            num=num-romanVal[i];
        }else{
            i++;
        }
           

    }
    console.log(str);

    
}
x(3999)