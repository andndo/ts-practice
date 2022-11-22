// node dist/practice 명령어를 입력하여 컴파일된 스크립트를 실행

let h4Change = document.querySelector("#title")
let btnChange = document.querySelector("#button")
btnChange?.addeventListener('click',function(){
    if (h4Change instanceof Element){
        h4Change.innerHTML = '하이하이'
    }    
})
if (h4Change instanceof Element){ //narrowing (h4Change != null) <- 이거넣어도 됨
    h4Change.innerHTML = '반가워요' // object 뒤에 ?붙여도 됨
}

let count = 0; // 숫자
count += 1;
// count = "갑자기 분위기 문자열"; // 이러면 에러가 납니다!

const message: string = "hello world"; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ["hello", "world"]; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!
messages.push("1"); // 넣을거면 이렇게!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나임
color = "yellow";
// color = "green"; // 에러 발생!
console.log(message);

//-------------------------------------------------------------------------------------------------------------------

function sum(x: number, y: number): number {
  // 함수에서 타입 지정은 이렇게
  return x + y;
  //return null //이러면 오류남
}

console.log(sum(1, 2));

//-----------------------------------------------------------------------------------------

// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

  radius: number; // 멤버 변수 radius 값을 설정합니다.

  constructor(radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

//--------------------------------------------------------------------------------------------

interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

const people: Person[] = [person, expert];

//---------------------------------------------------------------------------------------

// any쓸거면 타입스크립트 왜 씀
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b,
  };
}

