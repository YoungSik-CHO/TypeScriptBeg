/** rest parameter
 *  몇개의 paramter가 들어올지 모를때 사용 
 *  ... 를 붙여서 사용
 */

let func = (...a :number[]) => {
    console.log(a)
}
func(1,2,3,4,5,6,7) // 여러개의 변수를 a라는 Array에 저장함

/** ... 의 용도
 *  1) 함수의 param으로 쓰면 array로 받겠다
 *  2) Array안에 쓰면 괄호 벗겨주셈 이란뜻
 */
let arr = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// destucturing : array 나 object 변수를 각각의 변수로 담고 싶을때(간단하게)
let [var1, var2] = ['안녕', 100];
console.log(var1)

interface test123 {
    Student : boolean,
    agee : number
}
let { Student, agee} = {Student : true, agee : 20};
console.log(Student);

// parameter에도 object형을 넣을수 있음
function destuctureFunc ({ Student , agee } : test123) {
    console.log(Student, agee)
}
// 함수 선언할때 값이 들어있는 object을 넣어주면 됨.
destuctureFunc({Student : true, agee : 20});

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 
let getMax = (...num : number[]) => {
    let value :number = 0
    num.forEach((v :number) => {
        if (value < v) {
            value = v
        }
    })
    return value;
}
let maxvalue = getMax(111,2,3,4,5,6,7,8,9);
console.log(maxvalue);

// (숙제2) 아래와 같이 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
// Quiz4( { user : 'kim', comment : [3,5,4], admin : false } )
interface Quiz4Interf {
    user : string,
    comment : number[],
    admin : boolean
}
function Quiz4 ({ user, comment, admin} : Quiz4Interf)  {
    console.log(user , comment, admin)
}
Quiz4({user : 'kim', comment : [3,5,4], admin : false});

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
interface Quiz5Interf {
    arr : (number | string | boolean)[]
}

// Interface 안에 있는 형식 1개만을 타입으로 쓸수도 있음(interface['element'] 처럼 쓰면됨)
function Quiz5([a,b,c] : Quiz5Interf['arr']) {
    console.log(a,b,c);
}
Quiz5([40, 'wine', false])
