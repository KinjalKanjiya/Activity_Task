//Arrow Function
let greet = (user) => { console.log('Hello' +user)}
greet('Jini')

let add = (num1,num2) => num1+num2;
console.log(add(4,5));

//Destructuring

let arr = [3,5,8,9,12,14]
let[a,b,c,...rest] = arr
console.log(a,b,c,...rest)
console.log(a,...rest);

//object destructuring
const {d,e} = {d:1,e:5}
console.log(d,e)

//Spread Operator

let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1 + v2 + v3
}
console.log(sum(...arr1))

let obj2 ={
    name:"Jini",
    Age:21,
    City:"Morbi"
}
console.log({...obj2,City:"Rajkot"}) //This will print the object as it is city will change
console.log({City:"Rajkot",...obj2}) //This will print the object without changing any values

//Rest Operator

function AddNumbers(a,b,c,...other){
    console.log(other)
    console.log(other[1])

    return a+b+c;
}
const res = AddNumbers(2,5,6,8,9,7,1,2,3)
console.log(res)