
const fun1 = (x, y, callback) => {
    console.log(x, y);
    callback(x, y)
};

const fun2 = (x, y) =>{
    console.log(x + y)
}
jsmain.js
fun1(4, 5, fun2)
