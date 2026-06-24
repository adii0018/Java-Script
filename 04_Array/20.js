const  products =[
    {name:"bag",price:978},
    {name:"book",price:78},
    {name:"pen",price:900},
    {name:"cloths",price:200},
];

const  filtureproduct = products.filter((currnet)=>{
    console.log(currnet.name)
    console.log(currnet.price)
    console.log(currnet.price <=500)
})