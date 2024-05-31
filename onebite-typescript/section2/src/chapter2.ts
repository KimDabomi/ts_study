let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "dabomi"];
let boolArr: Array<boolean> = [true, false];

// 배열의 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];

// 튜플 - 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

const user: [string, number][] = [
    ['김씨', 1],
    ['이씨', 2],
    ['박씨', 3],
    // [4, '유씨'] 이런 경우를 방지하기 위함
]