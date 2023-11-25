let name = "Radha"

//Length -> It is used to find length of string
console.log(name.length);
//Convert to Upercase -> It is used to convert string into upercase
console.log(name.toUpperCase());
//Convert to lowercase -> It is used to convert string into lowercase
console.log(name.toLowerCase());
//Slicing 
console.log(name.slice(2,4)) //from 2 to 4 not included 4
console.log(name.slice(2)) //from 2 to end
//replace -> it  is use to replace the string
console.log(name.replace("dha","jan"))
//concat -> It is used to concatination string
let friend = "Krishna"
console.log(name.concat("is a friend of " , friend ," Ok"))
console.log(friend[0])
console.log(friend[1])

//trim -> It is used to remove white spaces
let name1 = "        Jini      "
console.log(name1)
console.log(name1.trim())