
let num =2;
let isprime =true;
 debugger;
for(let i = 2;i<num;i++){
   
    if(num % i===0){
        isprime =false;
        break;
    }
}
if(isprime){
    console.log("yeeh numbr prime he")
}
else{
    console.log("not a prime number")
}