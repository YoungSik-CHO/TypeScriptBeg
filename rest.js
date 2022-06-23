/** rest parameter
 *  몇개의 paramter가 들어올지 모를때 사용
 *  ... 를 붙여서 사용
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var func = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
};
func(1, 2, 3, 4, 5, 6, 7); // 여러개의 변수를 a라는 Array에 저장함
/** ... 의 용도
 *  1) 함수의 param으로 쓰면 array로 받겠다
 *  2) Array안에 쓰면 괄호 벗겨주셈 이란뜻
 */
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
// destucturing : array 나 object 변수를 각각의 변수로 담고 싶을때(간단하게)
var _a = ['안녕', 100], var1 = _a[0], var2 = _a[1];
console.log(var1);
var _b = { Student: true, agee: 20 }, Student = _b.Student, agee = _b.agee;
console.log(Student);
// parameter에도 object형을 넣을수 있음
function destuctureFunc(_a) {
    var Student = _a.Student, agee = _a.agee;
    console.log(Student, agee);
}
// 함수 선언할때 값이 들어있는 object을 넣어주면 됨.
destuctureFunc({ Student: true, agee: 20 });
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 
var getMax = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var value = 0;
    num.forEach(function (v) {
        if (value < v) {
            value = v;
        }
    });
    return value;
};
var maxvalue = getMax(111, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(maxvalue);
function Quiz4(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
Quiz4({ user: 'kim', comment: [3, 5, 4], admin: false });
// Interface 안에 있는 형식 1개만을 타입으로 쓸수도 있음(interface['element'] 처럼 쓰면됨)
function Quiz5(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
Quiz5([40, 'wine', false]);
