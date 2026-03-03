// functions with parameters
// parameters are values that get passed as arguments when we invoke a function
// They help us to create function that can be reusable through out a program

function greeting(name){
    console.log("Hello", name, "How have you been?")
}

greeting("Ryan K")
greeting("John James")

console.log("======================")
// Below is the function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of thenumbers is:", sum)

}


addition(45, 60)
console.log("=======================")
// Calculate the area of triangle whose base is 20cm and height is 12cm
function area(base, height){
    area = 0.5 * base * height
    console.log("The area of the triangle is:", area, "cm\u00B2")
}
area(20, 12)
console.log("============================")

// Find the simple interest given theprincipal as

