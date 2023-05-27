/**
 * @param {number} x
 * @return {number}
    let y = x.toString();
    let y_rev ='';
    for(let i=y.length-1;i>=0;i--){
        if(y[i]=='-'){
            y_rev = y[i] + y_rev;
        } else {
            y_rev+=y[i];
        }
    }
    x = Number.parseInt(y_rev);

    let y='';
    if(x !== Math.abs(x)){
        y='-'
    }
    y += x.toString().split('').reverse().join('');
    x=Number.parseInt(y);

 */
    var reverse = function(x) {
        r1=0;
        x2=Math.abs(x);
        while(x2>0){
            x1=Number.parseInt(x2%10);
            r1=r1*10+x1;
            console.log(r1,x1,x2)
            x2=Number.parseInt(x2/10);
            
        }
        if(x!==Math.abs(x)){
            r1=-1*r1
        }
        x=r1;
        if(-2147483648>x || 2147483647<x){
            return 0;
        }
        return x;
        
    };

    console.log(reverse(-1201));