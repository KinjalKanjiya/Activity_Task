//Global Scope
let p=6;
//Function scope

if(true){
    let a= 10;
    const c=30;
    let p=20;
    console.log(a)
    console.log(p)
}
// //This give error because b is function scope
// console.log(b)
// console.log(c)
console.log(p)
//Function scope
function ax(){
    let k=10;
    console.log(k)
}
ax()
// console.log(k) //k is not defined it will give error


