//함수 param에 undefined가 들어올 수 있는 상황에서 undefined이 아닐때만 함수를 실행해야 할때
var func1 = function (a) {
    // a가 string이면 true undefined 이면 false를 반환함
    if (a && typeof a === 'string') {
    }
};
var func2 = function (animal) {
    // 1) in 사용하기 (element in object)
    if ('swim' in animal) {
        return animal.swim;
    }
};
// 2) instanceof 
var date1 = new Date();
if (date1 instanceof Date) {
    console.log('its date !!');
}
function isCar(x) {
    // literal Type 속성으로 구분만 해도 TypeScript는 자동으로 x는 Car 타입이다 라고 지정해버림
    if (x.wheel === '4개') {
        console.log('x 는 Car 타입');
    }
    else {
        console.log('x 는 Bike 타입');
    }
}
