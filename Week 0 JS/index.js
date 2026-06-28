//1
var a;
let b;
const c = 3;
console.log(a);
console.log(b);
console.log(c);
//2
let age = 12;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
//3
function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("Nguyen Loc");

//4
const SayHello = (name) => {
  console.log("Hello " + name);
};
SayHello("Thanh Vy");

//5
const printName = (name, age) => {
  console.log(`My name is ${name}
I'm ${age} years old`);
};
printName("Nguyen Loc", 37);

//mini project
//studen card cli
const student = {
  name: "Nguyen Loc",
  age: 37,
  major: "Computer Science",
  skills: "\n- Html\n- Css\n- Js",
};
const printStudentCard = (student) => {
  console.log(`=====================

Student Information

=====================

Name: ${student.name}

Age:${student.age}

Major:${student.major}

Skills: ${student.skills}`);
};

printStudentCard(student);

//Challenge

const addSkill = (student, skill) => {
  student.skills += `\n- ${skill}`;
};
addSkill(student, "React");

printStudentCard(student);
