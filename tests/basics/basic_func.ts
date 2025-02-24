export{}
function hello(){
    console.log("hello gugus");
}
hello();

function summation(num1: number,num2:number){
    console.log(num1+num2)
}
summation(4,5);

function sum (n1:number,n2:number):number{
return(n1+n2);
}
console.log(sum(10,20));


function subtract(n3:number,n4?:number):number{
if (n4)
    return(n3-n4)
else
    return n3
}
console.log(subtract(10,7));
console.log(subtract(10));