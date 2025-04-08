const person = {
  name: "akash",
  age: 23,
  isStudent: true
};

let sentance1 = "";
if(person.isStudent1){
    sentance1 = "he is s student";
}else{
    sentance1 = "he is a not student";
}
console.log(sentance1)


let sentance2 = "";
person.isStudent2 ?  sentance2 = "he is s student" : sentance2 = "he is a not student";
console.log(sentance2)


let sentance = person.isStudent ? "he is s student" :"he is a not student";
console.log(sentance)

//