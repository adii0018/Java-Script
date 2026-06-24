const number =[1,2,4,5,4,6,7,3]

let uniquevalue = number.filter((currnet,index,arr)=>{
    return arr.indexOf(currnet)=== index;

})

console.log(uniquevalue)
