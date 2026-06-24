const  products =[
    {name:"bag",price:978},
    {name:"book",price:78},
    {name:"pen",price:900},
    {name:"cloths",price:200},
];

const  filtureproduct = products.filter((currnet)=>{
   return currnet.price <=500
})
console.log(filtureproduct)