// package import and assign to a variable
const math = require("./math")
//Destructuring
const {addFn, subFn} = require("./math")


console.log("OPERATION = ",math)
console.log("ADDITION = ", math.addFn(2,3))
console.log("SUBTRACTION = ", math.subFn(2,3))