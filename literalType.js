// 더 엄격한 타입 지정 가능.
var name11; // 123만 넣을수있음
var name22; // 'kim' 만 들어옴
// => Literal Type : 1.변수에 뭐가 들어올지 엄격하게 관리가능함
//                   2. 자동완성 하기편함
// 버그 잡기 편함(변수 지정하니까)
var itsme;
function itsmeFunction(a) {
    return 1;
}
/** 예제 1) 가위 or 바위 or 보 중 1개만 입력가능
 *          가위 or 바위 or 보 만 들어올수 있는 array를 return 해야함
 */
function game(param) {
    return ['가위'];
}
game('바위');
// Literal Type은 const 변수의 단점을 보완한 방법
// const는 1개밖에 못씀, Literal Type는 여러개 붙여서 쓸수 있음
var 자료 = {
    name: 'kim'
};
// 변수 만들때 as const 를 붙이면 1) "오른쪽에 있는 value로 type을 만들어주세요" 라는 뜻이 됨
// => let 자료는 'kim' 타입의 'kim'값이 됨
// 2) object 안에 있는 모든 속성을 readonly로 바꿔줌 (값 못바꾸게 하려고)
function 내함수(a) {
}
내함수(자료.name);
var memberInfo = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
memberInfo.plusOne(2);
memberInfo.changeName();
var cutZero = function (str) {
    console.log(str);
    var replace = str.replace(/^0+/, "");
    return replace;
};
console.log(cutZero("000001230234"));
var removeDash = function (str) {
    var replace = str.replace(/\-/g, '');
    return typeof replace === 'string' ? parseFloat(replace) : parseFloat(String(replace));
};
var finalFunction = function (phone, cutZero, removeDash) {
    return String(removeDash(cutZero(phone)));
};
console.log(finalFunction('010-1234-2345', cutZero, removeDash));
