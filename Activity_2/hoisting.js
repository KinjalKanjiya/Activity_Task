greet() //This will not give error because compiler will move variable declaration and function declaration at the top .
function greet(){
    console.log("Good morning")
}
console.log(a) 
var a =9 ;
console.log(a) 


//  console.log(b)
//  let b=9;         // Declaration hoisted to the top but initialization is not

//Function Expression
greet1()
var greet1 = function(){
    console.log("Jay Shree Krishna")
}