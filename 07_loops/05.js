let  userinpuut;
let  positive;

do{
    userinpuut = prompt("enter a  positive number")

    positive =parseFloat(userinpuut)

}while(isNaN(positive)||positive<0)

console.log("your postitivev number is",positive)


