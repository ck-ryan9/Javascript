// Arrow finctions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " How have you been? I trust  that you are well.")
}

greet("Ryan")
greet("Enzo")

// Example 2
console.log("===================")
// below is a function to find area of circle
const circleArea = (pi, radius) =>{
    let area= pi* radius * radius
    console.log("The area of the circle is : " + area+"cm\u00B2")

}
circleArea(3.142,7);
circleArea(3.142, 28);
console.log("=========================")
// come up eith an examole of an arrow function 
