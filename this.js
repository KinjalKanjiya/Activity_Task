let person1={
    name:"Raj",
    age:19,
    city:"Rajkot",

   Display: function (){
        console.log(this.name)
    }
}
person1.Display()
let person2={
    name:"Jay",
    age:21,
    city:"Jamnagar",

   Display: function (){
        console.log(this.city)
    }
}
person2.Display()