message="Jay Shree Krishna"

function hello1(){
    let message = "Good Morning"
    console.log(message);
    let Radha = function hello2(){
        console.log("I am Radha " + message)
    }
    return Radha
}
Radha = hello1()
Radha()


function init(){
    var name = "Ram"; //name is local variable created by init
    function displayName(){ //displayName() is the inner function 
        console.log(name); // a closure use variable declared in the parent function
    }
    // name="Janki"
    return displayName;
}
c=init()
c()



function returnFunc(){
    const x =() =>{
        let a=1
        console.log(a)
        const  y= () =>{
            // let a=2
            console.log(a)
        
        const z = () =>{
            // let a=3
            console.log(a)
        }
        z()
        }
        a=999
        y()
    }
    return x
}
let  b = returnFunc()
b()