//Array Methods
//to string () -> Convert an array to a string of comma separated value
let num = [1,2,3,4,5,6,7,8,9]
let b = num.toString() 
console.log(b)
//join() -> joins all array element  using separator
let n = [7,2,5,9,]
let m=n.join("-")
console.log(m)
//Pop() -> Remove last element from an array
let k = [1,2,3,4,5,6,7,8]
console.log(k.pop())
//Push() -> Add the element of an array
let a = [7,9,3,5]
a.push(1)
console.log(a)
//Shift ()->Removes first element and returns
let c = [1,2,3,4,5]
c.shift();
console.log(c)
//unshift() ->Adds element to the beggining and returns new array length
let d = [1,2,3,4,5,6,7]
d.unshift(0);
console.log(d)
//delete  -> Array element can be deleted using delete operator
delete d[1]
console.log(d)
//concat -> used to join arrays to given array
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3))
