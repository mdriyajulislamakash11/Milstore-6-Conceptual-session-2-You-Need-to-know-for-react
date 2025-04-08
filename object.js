const person = {
    name: "akash",
    age: 23,
    isStudent: true
  };

  const {age, ...info} = person;
  console.log(age, info)