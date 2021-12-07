// // ASSESSMENT 1: Coding practical questions

// // To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// // Please read all questions thoroughly!
// // If you get stuck, please leave comments to help us understand your thought process.

// // --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// // Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//Function can be created using simple if statements.. If above or equal to 212, its above boiling. if below 42 its below boiling, else its at boiling.

// var temp = 210
// var temp = 350
var temp = 212

if (temp > 211){
    console.log(`${temp} is above boiling point`);
}else if(temp < 43){
    console.log(`${temp} is below boiling point`)
}else{
    console.log(`${temp} is at boiling point`)
}

// // --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
//Can combine two arrays using the .concat() function. From there, length can be determined using .length

var myNumbers1 = [3, 7, 0, 36, -9, 7]
var myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length)

// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"
//.reverse() does not work on strings. Need to convert currentCohort into an array, and reverse that array. From there, other built in functions can be used to combine, and remove extra punctuations

var currentCohort = "Echo 2021"
var revCohort = []

for (let i = 0; i < currentCohort.length; i++){
    revCohort[i] = currentCohort[i]
}

revCohort.reverse()

console.log(revCohort.join(""))

// // --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
// by cycling through the array using a for loop, you can reference each index within the array, and check to see if the modulo of 2 produces any remainders. If the remainder is === 0 it is even. If the remainder === 1 it is zero

var myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}

// // --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3
// Before performing the evaluation of subtracting the two values, you need to compare which number is bigger.. if number1 > number2 then subtract number1 from number2 and viseversa

// //var number1 = 58
// //var number2 = 100

var number1 = 27
var number2 = 24

if (number1 > number2){
    console.log(number1 - number2)
}else{
    console.log(number2 - number1)
}

