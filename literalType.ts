// 더 엄격한 타입 지정 가능.
let name11 :123      // 123만 넣을수있음
let name22 :'kim'   // 'kim' 만 들어옴

// => Literal Type : 1.변수에 뭐가 들어올지 엄격하게 관리가능함
//                   2. 자동완성 하기편함
 
// 버그 잡기 편함(변수 지정하니까)
let itsme :'대머리' | '솔로'
function itsmeFunction( a: 'hello') :1 | 0 {
    return 1
}

/** 예제 1) 가위 or 바위 or 보 중 1개만 입력가능
 *          가위 or 바위 or 보 만 들어올수 있는 array를 return 해야함
 */

function game(param : '가위' | '바위' | '보' ) :('가위' | '바위' | '보')[] {
    return ['가위']
}
game('바위')


// Literal Type은 const 변수의 단점을 보완한 방법
// const는 1개밖에 못씀, Literal Type는 여러개 붙여서 쓸수 있음
let 자료 = {
    name : 'kim'
} as const
// 변수 만들때 as const 를 붙이면 1) "오른쪽에 있는 value로 type을 만들어주세요" 라는 뜻이 됨
// => let 자료는 'kim' 타입의 'kim'값이 됨
// 2) object 안에 있는 모든 속성을 readonly로 바꿔줌 (값 못바꾸게 하려고)
function 내함수(a : 'kim') :void {

}
내함수(자료.name )
type MemberInfoType = {
    name : string,
    plusOne : (a:number) => number,
    changeName : () => void
}
let memberInfo : MemberInfoType = {
    name : 'kim',
    plusOne(a){
        return a + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}
memberInfo.plusOne(2);
memberInfo.changeName();


// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
type cutZeroType = (str : string) => string
let cutZero : cutZeroType = (str) => {
    console.log(str)
    let replace = str.replace(/^0+/, "");
    return replace
}
console.log(cutZero("000001230234"))

type removeDashType = (str: string) => number
let removeDash : removeDashType = (str) => {
    let replace = str.replace(/\-/g, '')
    return typeof replace === 'string' ? parseFloat(replace) : parseFloat(String(replace));
}
//console.log(removeDash('534533535-41323-'))

// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
type finalFunctionType = (phone : string , cutZero : cutZeroType, removeDash : removeDashType) => string


let finalFunction :finalFunctionType = (phone, cutZero, removeDash)  => {
    return String(removeDash(cutZero(phone)));
}
console.log(finalFunction('010-1234-2345', cutZero, removeDash))