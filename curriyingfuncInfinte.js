function add(x){
    return function (y) {
        if(!y){
            return x;
        }
        return add(x+y);
    };
}
let add2 = (x)=>(y)=> y ? add2(x+y):x;
let result = add(2)(3)();
console.log(result);
console.log(add2(2)(3)())