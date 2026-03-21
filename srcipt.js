// var let const 
// declaration and initailization 
// schope (globle ,block ,function)
let a=10
{
    let a=12
    console.log("inner..",a)
}
console.log("outer..",a)