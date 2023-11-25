function sum(x, y) {
  return x + y
}
console.log(sum(3, 7))
console.log("sum  of 2 and 3 is", sum(2, 3))

const avg = (p, q) => {
  return (p + q) / 2
}
console.log("Avergae is : ", avg(5, 6))

const hello = () => {
  console.log("Hey How are you ")
  return "Hii"
}
console.log(hello())
hello()

function calculateCartPrice(num1) {
  return num1
}
console.log(calculateCartPrice(200, 400, 500, 600))

//spread operator
function calculateCartPrice1(...num1) {
  return num1
}
console.log(calculateCartPrice1(200, 400, 500, 600))

function calculateCartPrice2(val1, val2, ...num1) {
  return num1
}
console.log(calculateCartPrice2(200, 400, 500, 2000))

//Passed Object in function
const user = {
  username: "Kinjal",
  age: 21,
}
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`)
}
handleObject(user)
handleObject({
  username: "Jini",
  age: 20,
})

//Passed Array in function
const myArray = [10, 20, 30, 40, 50]
function resultarray(getArray) {
  return getArray[1]
}
console.log(resultarray(myArray))
console.log(resultarray([100, 101, 102, 103]))
//---------------------------------------------------------------------------------------------
//Function
function a() {
  console.log("a called")
}
a()
//Function expression
var b = function () {
  console.log("b called")
}
b()
// //Anonmous function
// function(){
//it gives synatx error
// }

//named function expression
var c = function xyz() {
  console.log("c called")
}
c()

//First Class function
var d = function (par1) {
  return function xyz() {}
}
console.log(d())

//callback function
setTimeout(function () {
  console.log("Heyy!")
}, 5000)

function x(y) {
  console.log("x")
  y()
}
x(function (y) {
  console.log("y")
})
