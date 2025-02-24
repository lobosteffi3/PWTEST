export{}
let name='Steffi';
console.log(`GM ${name}`);

let num:number=20;
let flag:boolean=true;
let list:number[]=[10,20,30];
console.log(num , flag, list[2]);

let list1:[string,number] //tuple
list1=['this is my tuple',1];
console.log(list1[0],list1[1]);

enum shapes{tri,pen=10,hex}
let t:shapes=shapes.tri;
let p:shapes=shapes.pen;
let h:shapes=shapes.hex;
console.log(t,'',p,'',h);

enum color{red,blue,green}
let r:string=color[0];
console.log(r,color[1],color[2]);
