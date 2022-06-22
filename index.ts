
// ts 파일 생성시 터미널 -> tsc -w 실행하여 같은이름의 js 파일 생성되는지 확인 해야함

// let 이름 :string = 'kim';



// :string "이 변수엔 string(문자) type만 들어올수 있어"
// 이름 = 123; => 에러남
// type에는 여러가지가 있음 => string, number, boolean, null, undefined, bigint , [](array), {}(object) 등등
// 다만 []와 {}도 type 지정함 (string[] , {name : string})

// array ex) let 이름 :string[] = ['kim', 'park'];
// object ex) let 이름 :{ name? : string } = {name : 'kim'};
//                      key 뒤에 ? => 해당 값이 안들어와도 에러안남(옵션임)

// union type ex) let 이름 :string | number = 123;
// 변수지정타입 ex) type Mytype  =string | number;
//                 let 이름 :Mytype = 123;
//                  ★ 변수지정타입 지정은 다른 변수와의 구분을 두기 위해 앞글자를 대문자로 사용함 ★

// literal type 지정
type NameType = 'kim' | 'Park'
// 변수 타입에 특정한 문자만 오게끔 설정도 가능함.
// 위외같이 NameType을 지정하면 앞으로 이름 변수에는 'kim', 'Park' 문자만 올수 있음.

// 에러 : let 이름 :NameType = 'kin';
// 안에러 : let 이름 :NameType = 'kim';


// 함수1에 타입 지정 
// 함수function은 파라미터로 number를 받고 number 타입만 리턴 가능하다.
function 함수1(x : number) : number {
    return x * 2
}

// 함수('123') 에러

// array 안에 첫번째 인자는 무조건 number, 두번째는 무조건 boolean만 와야함 => tuple type
type Member = [number, boolean];
// let john:Member = []; 에러
let john2:Member = [123, true];

type Member2 = {
    name : string
}
let john : Member2 = {name : 'kim'};

// 만들려고 하는 object안에 key:value가 너무많아 
// 아래와 같이 입력된 object type은 "글자로 된 모든 object 속성의 타입은 :string 이다" 라는 의미를 가짐
type Member3 = {
    [key : string] : string
}
let john3 : Member3 = {
    name : 'kim',
    age : '123'
}


// class 문법 type 지정
class User {
    name:string;
    constructor(name :string){
        this.name = name;
    }
}

/* 
    보기엔 ㅈㄴ 간단해 보이지만 
    TypeScript만의 지켜야할 코딩 룰도 많고
    Type문법 외에 기능도 많다.
*/


let 이름 :string = '조영식';
let 나이 :number = 29;
let 출생지역 :string = '평창';
let 가수 :{'가수' : string, '노래' : string} = {'가수' : 'Maroon5' , '노래' : 'Maps'};

let project : {member : string[], days : number, started : boolean} = {                     
    member : ['kim', 'park'],
    days : 30,
    started : true
}



















