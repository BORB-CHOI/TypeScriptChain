class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const borb = new Human("BORB", 20, "male");

// interface Human {
//   age: number;
//   name: string;
//   gender: string;
// }

// const person = {
//   name: "bore",
//   gender: "male",
//   age: 19,
// };

const sayHi = (InGan: Human): string => {
  return `Hello ${InGan.name}, you are ${InGan.age}, you are a ${InGan.gender}!`;
};

console.log(sayHi(borb));

export = {};
