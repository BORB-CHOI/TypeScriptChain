interface Human {
  age: number;
  name: string;
  gender: string;
}

const person = {
  name: "bore",
  gender: "male",
  age: 19,
};

const sayHi = (InGan: Human): string => {
  return `Hello ${InGan.name}, you are ${InGan.age}, you are a ${InGan.gender}!`;
};

console.log(sayHi(person));

export = {};
