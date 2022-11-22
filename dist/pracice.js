"use strict";
// node dist/practice 명령어를 입력하여 컴파일된 스크립트를 실행
let h4Change = document.querySelector("#title");
if (h4Change instanceof Element) { //narrowing (h4Change != null) <- 이거넣어도 됨
    h4Change.innerHTML = '반가워요';
}
let count = 0; // 숫자
count += 1;
// count = "갑자기 분위기 문자열"; // 이러면 에러가 납니다!
const message = "hello world"; // 문자열
const done = true; // 불리언 값
const numbers = [1, 2, 3]; // 숫자 배열
const messages = ["hello", "world"]; // 문자열 배열
// messages.push(1); // 숫자 넣으려고 하면.. 안된다!
messages.push("1"); // 넣을거면 이렇게!
let mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber = null; // number 일수도 있고 null 일수도 있음
let color = "red"; // red, orange, yellow 중 하나임
color = "yellow";
// color = "green"; // 에러 발생!
console.log(message);
//-------------------------------------------------------------------------------------------------------------------
function sum(x, y) {
    // 함수에서 타입 지정은 이렇게
    return x + y;
    //return null //이러면 오류남
}
console.log(sum(1, 2));
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
const person = {
    name: "김사람",
    age: 20,
};
const expert = {
    name: "김개발",
    skills: ["javascript", "react"],
};
const people = [person, expert];
//---------------------------------------------------------------------------------------
// any쓸거면 타입스크립트 왜 씀
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
