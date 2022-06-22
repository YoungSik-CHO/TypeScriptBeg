// ts 파일 생성시 터미널 -> tsc -w 실행하여 같은이름의 js 파일 생성되는지 확인 해야함
// 변수 타입에 특정한 문자만 오게끔 설정도 가능함.
// 위외같이 NameType을 지정하면 앞으로 이름 변수에는 'kim', 'Park' 문자만 올수 있음.
// 에러 : let 이름 :NameType = 'kin';
// 안에러 : let 이름 :NameType = 'kim';
// 함수1에 타입 지정 
// 함수function은 파라미터로 number를 받고 number 타입만 리턴 가능하다.
function 함수1(x) {
    return x * 2;
}
// let john:Member = []; 에러
var john2 = [123, true];
var john = { name: 'kim' };
var john3 = {
    name: 'kim',
    age: '123'
};
// class 문법 type 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
/*
    보기엔 ㅈㄴ 간단해 보이지만
    TypeScript만의 지켜야할 코딩 룰도 많고
    Type문법 외에 기능도 많다.
*/
var 이름 = '조영식';
var 나이 = 29;
var 출생지역 = '평창';
var 가수 = { '가수': 'Maroon5', '노래': 'Maps' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
