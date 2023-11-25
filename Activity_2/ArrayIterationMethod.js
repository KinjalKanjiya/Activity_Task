
const num1 = [1,2,3,4,5]
//foreach
num1.forEach(function(num1){
    console.log(num1)
})
//Map
const squared = num1.map(function(num1){
    return num1 * num1;
})
console.log(squared)

//filter
const num2 = [1,2,3,4,5,6,7,8,9,10]
const evens = num2.filter(function(num2){
    return num2 % 2 ===0
})
console.log(evens)

//reduce
const sum =num2.reduce(function(result,item){
    return result+item;
},0)
console.log(sum)

//some
const even = num2.some(function(num2){
    return num2 % 2 ===0
})
console.log(even)

//every
const even1 = num2.every(function(num2){
    return num2 % 2 ===0
})
console.log(even1)

//find
const firstevennumber = num2.find(function(num2){
    return num2 % 2 ===0
})
console.log(firstevennumber)

//findindex
const firstevennumberindex = num2.findIndex(function(num2){
    return num2 % 2 ===0
})
console.log(firstevennumberindex)