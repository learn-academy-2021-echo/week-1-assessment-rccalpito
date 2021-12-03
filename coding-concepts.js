// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: I received the expected output. The console is told to output the length of the variable cohort


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: "l" 
// b) Verify and explain: I received the expected output. The code is asked to return to console the 3rd index of "hello world!"


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain:  the code is asking to output the 1st index of the variable array language.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: My answer was incorrect. The .toUpperCase() method only works on strings. To upper case each individual index, you would have to reference the specific index in the array e.g weekendDays[1].toUpperCase()


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: the function typeof returns the type of primitive datatype of the length of the array datatypes
