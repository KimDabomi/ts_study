// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "dabomi",
    nickname: "mamomi",
    birth: "19950830",
    bio: "hello",
    location: "Paju"
};

let user2: User = {
    id: 2,
    name: "kim",
    nickname: "ma",
    birth: "19920101",
    bio: "hi",
    location: "Seoul"
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410, // 없으면 오류
    UnitedState: 840,
    UnitedKingdom: 826
};