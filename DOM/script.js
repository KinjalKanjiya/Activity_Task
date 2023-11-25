// console.log(window)
// console.log(document )
// console.log(document.body)
// location.href="https://google.com"


// var x=1;
// a();
// b();
// console.log(x)

// function a(){
//     var x=10;
//     console.log(x)
// }

// function b(){
//     var x=100;
//     console.log(x)
// }


// console.log(b)
// let b=10;

function attacheventListners(){
    let count=0
    document.getElementById("clickMe").addEventListener("click", function() {
        console.log("Button Clicked",++count);
      });

}
attacheventListners()



