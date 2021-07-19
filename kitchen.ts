let myName: string = "Moshe"

const numberOfStates: number = 50

let sum: number = 5 + 4
console.log(sum)

function sayHello() {
    return "Hello World!"
}

console.log(sayHello())



console.log(checkAge("Charles", 21))
console.log(checkAge("Abby", 27))
console.log(checkAge("James", 18))
console.log(checkAge("John", 17))

let veg: string[] = ["carrot", "tomato", "broccoli"]

for (let i=0; i < veg.length; i++){
    console.log(veg[i]);
}

let pet: any = {
    name: "fido",
    breed: "dog" 
}
console.log(pet.name, pet.breed)
function checkAge (name: string, age: number){
    if (age<21){
        return "Sorry " + name + ", you aren't old enough to view this page!"
    } else {
        return "You are old enough to enter " + name
    }
}

let sinkTest = [{
    name: "Mo",
    age: 22
},  {
    name: "Jo",
    age: 19
}, {
    name: "Yo",
    age: 25
}, {
    name: "Shmo",
    age: 18
}, {
    name: "Po",
    age: 55
}]
//this loop runs the function for each object in the array
for (let i = 0; i < sinkTest.length; i++){
   console.log(checkAge(sinkTest[i].name, sinkTest[i].age))
}
//this loop iterates through sinkTest
for (let i in sinkTest) {
    //console.log(i)
    console.log(sinkTest[i])
}

function getLength<T>(str: string): number {
    return str.length;
}

if (getLength("Hello") % 2 !== 0){
    console.log ("The world is nice and even!")
} else (
    console.log("The world is an odd place!")
)



let stringLength: number = getLength("Hello World")
console.log(stringLength)


