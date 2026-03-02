// Object Data type:
// An object data type is a data type that stores data in form of key value pairs

let person = {
    Name : "Ryan Mutuku", 
    Age : 18,
    isRegistered : true
};
console.log("The datils of yhe person is:" , person)

// First method is by use of square brackets
console.log(person["Age"])

//Second method is by use of dot(.) notation
console.log(person.Name)

// Array data type:
// This refers to a collection of items that are on indexes
let fruits = ["Mango", "Pineapple", "Apple", "Banana", "Melon", "Lemon", "Grapes"]
console.log("The enire array of fruits is:",fruits)
// To access the items of an array we use the index
console.log(fruits[3])
 
// You can slice items of any list
console.log(fruits.slice(2, 5))

