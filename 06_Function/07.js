// calcluator 

let calcluatorr=(n1,n2,operator)=>{
    let result;
    switch(operator){

        case"+":
        return n1+n2;

        case"-":
        return n1-n2;

        case"*":
        return n1*n2;

        case"/":
        return n1/n2;

    }
}
console.log(calcluatorr(11,12,"/"))