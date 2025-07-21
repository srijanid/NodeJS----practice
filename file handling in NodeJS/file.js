// module to Interact with file
const fs = require("fs")

//Sync...
fs.writeFileSync("./test.txt", "Hello World")

// Async..
fs.writeFile("./test.txt", "Hello World Async",(err)=>{})

const result = fs.readFileSync('./contacts.txt','utf-8')
console.log(result)

// Async...
fs.readFile('./contacts.txt','utf-8',(err,result)=>{
    if (err) {
        console.log("Error",err)
    } else {
        console.log(result)
    }
})

// Appends date 
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())

// Appends the message
fs.appendFileSync("./test.txt",`${Date.now()} Hey There\n`);

// Copy a file with its content
fs.cpSync("./test.txt","./copy.txt")

// Delete a file
fs.unlinkSync("./copy.txt")

// Stats of a file
console.log(fs.statSync("./test.txt"))

// To make a directory
fs.mkdirSync("my-docs/a/b", {recursive: true})