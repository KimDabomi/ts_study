// unknown 타입
function unknownExam() {
    // 업캐스팅
    let a: unknown = 1;
    let b: unknown = "helllo";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 다운캐스팅 - 에러
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

// never 타입
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅 - 에러
    // let never1: never = 1;
    // let never2: never = "string";
    // let never3: never = true;
}

// void 타입
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined;
    }

    let voidVar: void = undefined;
}

// any 타입
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    // any는 업&다운 캐스팅 둘 다 가능
    anyVar = unknownVar;
    undefinedVar = anyVar;

    // never는 다운캐스팅 안됨 - 에러
    // neverVar = anyVar;
}