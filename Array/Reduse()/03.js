//Array → Object conversion


let a = ["adii","khsuahl","yashika","rahul"]

let b = a.reduce((Acc, val)=>{
    Acc[a] = (Acc[a]||0) +1
    return a;
}  ,{})

console.log(a)
