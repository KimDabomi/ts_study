// 대수 타입 - 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// - 합집합 타입과 교집합 타입이 존재


// 합집합 - Union
let a: string | number;
a = 1;
a = 'hello';

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: ""
};

let union2: Union1 = {
    name: "",
    language: ""
};

let union3: Union1 = {
    name: "",
    color: "",
    language: ""
};

// Dog, Person이 갖고 있는 최소 속성이 없으므로 합집합에 포함되지 않음 - 에러
// let union4: Union1 = {
//     name: ""
// };


// 교집합 - Intersection 
let variable: number & string;

type Intersection = Dog & Person;

// 두 객체가 갖고 있는 속성 중에 하나라도 빠지면 안됨
let intersection: Intersection = {
    name: "",
    color: "",
    language: ""
}; 