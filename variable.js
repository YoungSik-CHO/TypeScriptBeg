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
var quiz3 = {
    // color : red,
    size: 50,
    position: [0, 0, 0, 0]
};
