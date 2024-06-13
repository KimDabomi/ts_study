// 타입 추론
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "kim",
    profile: {
        nickname: "ma"
    },
    urls: ["djWJrnwjWJrn"]
};

let {id, name, profile} = c;
let [one, two, three] = [1, 'hello', true];

function func(message = "hello") {
    return "hello";
}

let d;
d = 10;
d.toFixed();

d = "string";
d.toUpperCase();

// type이 바로 리터럴 타입으로 추론됨
const num = 10; 
const str = "string";
