let name = {
    firstname:"Kinjal",
    lastname:'Kanjiya',
}
let PrintFullName = function(hometown,state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state)
}
//call
PrintFullName.call(name,["Morbi","Gujarat"]);
let name1 = {
    firstname:"Rinkal",
    lastname:'Kanjiya',
}
PrintFullName.apply(name1,["Rajkot","Gujarat"]);


//bind method
let PrintMyName = PrintFullName.bind(name1,"Mumbai","Maharashtra");
console.log(PrintFullName);
PrintMyName();
