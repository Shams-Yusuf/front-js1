const web = 13;
if (web < 10) {
  console.log(" константа меньше  10");
} else {
  console.log("константа не меньше 10");
}

let x = 10,
  y = 7;
if (x > y) {
  console.log("x больше чем y");
} else console.log("x не больше, чем y");

let number = prompt("введите число");
if (number % 2 == 0) {
  console.log("четное число");
} else {
  console.log("нечетное число");
}

let a = prompt(7);
let b = prompt(1);
let c = prompt(4);
if (+a > +b && +a > +c) {
  console.log(a);
} else if (+b > +c && +b > +a) {
  console.log(b);
} else {
  console.log(c);
}

let left = "start";
let right = "end";
if (6 > 3) {
  console.log("start");
} else {
  console.log("end");
}

let login = "Ali";
let password = "1234";
let loginUser = prompt("login");
let passwordUser = prompt("password");
if (login === loginUser && password === passwordUser) {
  console.log("welcome");
} else {
  console.log("error");
}

let nam = 7;

switch (nam) {
  case 2:
    console.log("html");
    break;
  case 5:
    console.log("css");
    break;
  case 7:
    console.log("js");
    break;
  case 6:
    console.log("react");
    break;
  default:
    console.log("default");
}
