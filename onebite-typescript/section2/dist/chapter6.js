// any - 특정 변수의 타입을 확실히 모를 때
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
export {};
