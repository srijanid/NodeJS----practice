//console.log('Loading function');

function add(a,b) {
    return (a+b)
}
function sub(a,b) {
    return (a-b)
}

// let a = add(2,3)
// let b = sub(2, 3)

//multiple exports using module object
module.exports = {addFn:add, subFn:sub}

//using exports object
//anonymous fn
exports.addFn = (a, b) => {a+b}
exports.subFn = (a, b) => {a-b}