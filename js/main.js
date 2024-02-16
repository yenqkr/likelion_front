// let number = 1; // number
// let str = "abc"; // string
// let bool = true; // boolean (true or false)
// let undi = undefined; // undefined
// let nul = null; // null(object)
// let symbol = Symbol();

// let array = []; // 배열 (object)
// let obj = {}; // 객체 (object)
// let func = function () {}; // 함수(function)'

// let IsInfinity = 10 / 0;
// let IsNan = 10 / "seven";
// console.log(IsInfinity, IsNan);
// // Infinity NaN

// let sum = 0.1 + 0.2;
// console.log(sum);

// let str = 'I\'m fine Thank you "and you"';
// console.log(str);

// let num;
// console.log(num);

// let num = null;
// console.log(num);

// let bool1 = 5 < 8;
// console.log(bool1);
// let bool2 = 7 > 10;
// console.log(bool2);

// let arr1 = [10, "사과", true, null, function () {}, {}];
// console.log(arr1);

// let arr = [10, 20, 30];
// console.log(arr[1]);

// const [변수명]=function [함수명](){
//     // code
// }

// const gugudan=function gugudan2(){
//     // code
// };
// gugudan();

// let student1 = {
//   koreanScore: 90,
//   englishScore: 80,
//   mathScore: 60,
//   scienceScore: 70,
// };
// console.log(student1["koreanScore"]);
// console.log(student1.koreanScore);

// function printFruit(name) {
//   console.log(name);
// }
// printFruit("banana");

// function printReturn(num1, num2) {
//   console.log("return 실행 전");
//   return;
//   console.log("return 실행 후");
// }
// printReturn();
// const result = sum(10, 20);
// console.log(result);

// function sum(num1, num2) {
//   return num1 + num2;
// }
// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// const sum = (num1, num2) => num1 + num2;

// const getObject = () => ({
//   name: "철수",
//   age: 20,
// });
// const obj = getObject();
// console.log(obj.name);

// let hello='안녕하세요'+'반갑습니다'

// let str = `"여러분, '시작이 반이다' 라는 말 들어보셨죠?"`;
// console.log(str);

// let name1 = "철수";
// let name2 = "영희";
// let string = `${name1}은 ${name2}와 친구입니다.`;
// console.log(string);

// if (10 > 20) {
//   console.log("10은 20보다 크다");
// } else if (30 < 20) {
//   console.log("30은 20보다 작닫");
// } else {
//   console.log("10은 20보다 작다");
// }
// let animal = "dog";

// switch (animal) {
//   case "cat":
//     console.log("야옹");
//   case "dog":
//     console.log("멍멍");

//   case "cow":
//     console.log("음메");

//     defualt: console.log("일치하는 동물이 없습니다.");
//     break;
// }

// while (조건문) {
//   // 반복문
// }
// 거짓이 될 때까지 반복
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i = i + 1;
// }
let flag = false;
do {
  console.log("do-while");
} while (flag === true);
