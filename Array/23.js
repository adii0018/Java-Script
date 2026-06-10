const number =[1,2,4,5,4,6,7,3]

number.sort((a,b)=>{
    if (a>b) return -1;
    if (a<b) return 1;
});
console.log(number)