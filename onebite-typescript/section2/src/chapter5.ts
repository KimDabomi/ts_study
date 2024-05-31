// enum 타입 - 여러 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role {
    ADMIN,
    USER = 10,
    GUEST 
}

enum Language {
    korean = "ko",
    english = "en"
}

const user1 = {
    name: "kim",
    role: Role.ADMIN,
    language: Language.korean 
};

const user2 = {
    name: "da",
    role: Role.USER,
    language: Language.english 
};

const user3 = {
    name: "mi",
    role: Role.GUEST,
    language: Language.korean 
};


console.log(user1);
console.log(user2);
console.log(user3);
