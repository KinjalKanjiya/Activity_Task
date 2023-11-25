let p = new Promise(function(resolve,reject){
    let a= 1+1
    if(a ==2){
        resolve('success')
    }else{
        reject('Failed')
    }
    
})

p.then((message)=>{
    console.log("This is in the then " + message)
}).catch((message)=>{
    console.log("This is in the catch " + message)
})
