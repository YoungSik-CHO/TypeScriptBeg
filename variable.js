// const 변수 : 최초 선언 한 값은 재할당이 안됨
//           => but const를 object로 선언하면 object 내 값은 변경이 가능함.
var birthArea = { region: 'seoul' };
birthArea.region = 'busan'; // 에러안남
// const 변수로 선언 후 타입 내 key에 readonly 선언을 하면 해당 object 내 key는 값  못바꿈
var girlfriend = {
    name: '유경'
};
//girlfriend.name = '우야'    //   에러남 근데 저장하고 실행하면 그냥 뜸 (js는 안막잖아)
console.log(girlfriend.name);
var position = { x: 10, y: 20 };
// let NewType2Ex :NewType2 = { x:1 , y : '1' , z : 'z'};
// x 라는 중복된 속성을 & 로 묶어버리면 x는 never 형식이 됨
/**
    (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
    1. 이 타입은 object 자료형이어야합니다.
    2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
    3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
    4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
    type alias로 만들어보셈
 */
