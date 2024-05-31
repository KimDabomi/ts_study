// any - 특정 변수의 타입을 확실히 모를 때
// 가능한 사용하지 않음, 런타임 시에 에러가 발생하고 컴파일 시에는 에러가 발생하지 않음
let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
    num = unknownVar;
}