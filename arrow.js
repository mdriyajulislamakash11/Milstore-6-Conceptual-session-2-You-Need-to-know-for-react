const show = () => {
  console.log("arrow function");
};

const show1 = () => {
  return "arrow function";
};

const show2 = (x) => {
  console.log("value", x);
};

const show3 = (x) => {
  return x * 5;
};

// show()

const addMoney = (number) => {
  if (!Array.isArray(number)) {
    return "invalid";
  }

  let sum = 0;
  for (let num of number) 
    sum = sum + num
  
  return sum
};

const numbers = [11, 22, 33, 44, 55, 66, 77];
const send = addMoney(numbers);
console.log(send);
