const person = {
    name: "akash",
    age: 3,
    isStudent: true,
    details: "",
  };

  const y = person.isStudent && "done";
  console.log(y)

  const x = person.details || "N/A";
  console.log(x)