// 기본 타입 간의 호환성
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;


// 객체 타입 간의 호환성 - 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮을까?
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow"
};

let dog: Dog = {
    name: "maru",
    color: "brown",
    breed: "pupu"
};

// animal에 있는 속성을 dog도 갖고 있으므로 가능
animal = dog;

// dog에 있는 속성 중에 animal에 없는 속성이 있기 때문에 불가능 - 에러
// dog = animal;

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한입어쩌구",
    price: 30000,
    skill: "react"
};

book = programmingBook;
// programmingBook = book;


// 초과 프로퍼티 검사
let book2: Book = {
    name: "한입어쩌구",
    price: 30000,
    // skill: "react" - 초기화할 때에는 정해진 속성만 정해줘야됨
};