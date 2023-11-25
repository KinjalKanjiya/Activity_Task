class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

greet(){
    console.log(`Hello , my name is ${this.name}.`);
}
}
//Creating Objects
const person1 = new Person('Jini',20)
const person2 = new Person('Radha',21)

console.log(person1.name)
person2.greet();
