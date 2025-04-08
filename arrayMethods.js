// forEacch, map, find, filter

const numbers = [11, 22, 33, 44, 55, 66];

for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}

//forEach
const number1 = [1, 2, 3, 4];
number1.forEach((item) => {
  // console.log(item)
});

// map
const number2 = [1, 2, 3, 4];
const map = number2.map((item) => {
  const result = item * 2;
  return result;
});
console.log("Output map: ", map); //Output map:  [ 2, 4, 6, 8 ]

// filter
const number3 = [1, 2, 3, 4];
const filter = number3.filter((item) => item > 2);
// const filter = number3.filter((item) => {
//   const result = item <= 2;
//   return result;
// });
console.log(filter);


// find
const number4 = [ 32, 13, 7,  34, 23, 52, 2];
const find = number4.find((item) => item < 10);
console.log(find)

// reduce
const number5 = [1, 2, 3, 4];
const reduce = number5.reduce((prev, current) => prev + current, 0);
console.log(reduce)