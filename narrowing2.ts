//함수 param에 undefined가 들어올 수 있는 상황에서 undefined이 아닐때만 함수를 실행해야 할때
let func1 = (a :string | undefined) => {
    // a가 string이면 true undefined 이면 false를 반환함
    if (a && typeof a === 'string') {

    }
}

// 서로 배타적인(겹치지 않는) 속성을 가지고있는 경우 if 분기를 쳐야할때
type Fish = {swim :string}
type Bird = {fly : string}
let func2 = (animal : Fish | Bird ) => {
    // 1) in 사용하기 (element in object)
    if ('swim' in animal) {
        return animal.swim
    }
}

// 2) instanceof 
let date1 = new Date();
if (date1 instanceof Date) {
    console.log('its date !!')
}

// 서로 같은 속성을 가진 object을 분리하려고 할때는
// 속성 1개를 Literal Type으로 만들어준다. (ex) wheel)
type Car = {
    wheel : '4개',
    color : string
}
type Bike = {
    wheel : '2개',
    color : string
}

function isCar(x : Car | Bike) {
    // literal Type 속성으로 구분만 해도 TypeScript는 자동으로 x는 Car 타입이다 라고 지정해버림
    if (x.wheel === '4개') {
        console.log('x 는 Car 타입')
    }
    else {
        console.log('x 는 Bike 타입')
    }
}
