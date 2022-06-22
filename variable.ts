// const 변수 : 최초 선언 한 값은 재할당이 안됨
//           => but const를 object로 선언하면 object 내 값은 변경이 가능함.
const birthArea = {region : 'seoul'};
birthArea.region = 'busan'; // 에러안남

// typescript 쓰면 object 수정도 막을 수 있음
type GirlfriendT = {
    // object 내 수정을 막지 못하게 하려고
    readonly name : string
    // name? : string 
    // => ? 쓰면 뭐가달라짐? => name은 string | undefined 로 됨
}

// const 변수로 선언 후 타입 내 key에 readonly 선언을 하면 해당 object 내 key는 값  못바꿈
const girlfriend  : GirlfriendT= {
    name : '유경'
}
//girlfriend.name = '우야'    //   에러남 근데 저장하고 실행하면 그냥 뜸 (js는 안막잖아)
console.log(girlfriend.name)


// 변수와 변수를 타입으로 만들수도 있음
type Name1 = string;
type Age1 = number;
type Person = Name1 | Age1;


// object type과 object type을 합칠수도 있음
type PositionX = { x : number };
type PositionY = { y : number };
                        // 정확히는 extend 함 
type NewType = PositionX & PositionY;

let position :NewType = {x : 10, y : 20};

// type 변수는 재정의 불가능.
type Typex = {x : number};
// Typex = {y : number}; 에러남


/** 예제 1 object 타입을 정의한 type alias 두개를 & 기호로 합칠때 중복된 속성이 있으면 우짬?    
 */
type Quiz1 = {x : number , y : string};
type Quiz2 = {x : string, z : string};
type NewType2 = Quiz1 & Quiz2
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

    


