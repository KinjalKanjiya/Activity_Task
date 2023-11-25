//stringify
var myobj ={
    name:"Radha",
    age:31,
    city:"Morbi"
}

var x= JSON.stringify(myobj);
console.log(x)
//Parse
const myobj1 = '{"name": "John Doe", "age": 30}';
var y = JSON.parse(myobj1);
console.log(y)