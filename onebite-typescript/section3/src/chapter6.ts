// 타입 단언
type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "kim";
person.age = 30;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "maru",
    color: "brown",
    breed: "푸들"
} as Dog;


// 타입 단언의 규칙
// 값 as 단언 
// 값이 단언의 슈퍼타입이거나 서브타입이어야 함
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; 서로소 관계이므로 안됨


// const 단언
let num4 = 10 as const;

let cat = {
    name: "cat",
    color: "yellow"
} as const;

// cat.name = "maru"; const단언은 읽기 전용이므로 수정이 불가


// Non Null 단언
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "title",
    author: "kim"
};

const len: number = post.author!.length;