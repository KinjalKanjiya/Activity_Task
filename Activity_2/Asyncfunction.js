//always return promise

//if return value then wrapped with promise and writen promise.

async function getData(){
    return "Namaste";
}
const data = getData();
console.log(data)

data.then((res)=> console.log(res))


//Return Promise

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved value")
    },10000)
})

// function getData1(){
//     //Js engine will not wait for promise to be resolved.
//     p.then((res)=>console.log(res));
//     console.log("Namaste Javascript ")
// }
// getData1()
//Async await

async function handlePromise(){
    //JS engine will wait for resolved promise
    console.log("Hello world")
    const val = await p;
    console.log(val);
    console.log("Namaste Javascript")

}
handlePromise()

