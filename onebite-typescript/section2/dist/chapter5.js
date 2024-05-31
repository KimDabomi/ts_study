// enum 타입 - 여러 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};
