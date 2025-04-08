const person = {
  name: "akash",
  age: 23,
  isStudent: true
};

// let sentance = "";
// if(person.isStudent){
//     sentance = "he is s student";
// }else{
//     sentance = "he is a not student";
// }
// console.log(sentance)


// let sentance = "";
// person.isStudent ?  sentance = "he is s student" : sentance = "he is a not student";
// console.log(sentance)


let sentance = person.isStudent ? "he is s student" :"he is a not student";
console.log(sentance)