const a = [1,2,3,4,3,6,3,7,3]

const n = a.map((current)=>{

    if(current%2===0){
     return   current*current;
    }

})
.filter((current) => current!== undefined)
console.log(n)