
//                  파라미터로 넘어온 변수 x가 number 인지 string 인지 알 수 없어서
//                  함수 안에서 연산하면 에러가 남
//                  따라서 함수 안에서 x의 타입을 확정 짓고 나서 연산을 하든 뭘하든 해야함
function myFunction (x :number | string ){
    // 타입을 확정 지어야 변수를 연산 가능함
    if(typeof(x) === 'string'){
        return x + '1'
    }
    else {
        return x + 1
    }
}
myFunction(123);

function myFunction2 (x :number | string ) {
    
    let array :number[] = [];

    // narrowing 주의점 
    // if typeof로 narrowing 할때 else 문 없으면 에러날 수도 있음 
    // if 썻으면 else도 작성해
    if (typeof x === 'number') {
        array[0] = x;
    }
    else {

    }   
}

/** Narrowing으로 판정해주는 문법들
 *      1) typeof                       => 타입 1개 한정
 *      2) 속성명 in 오브젝트자료         => 범위 판정
 *      3) 인스턴스 instance of 부모     => 부모 인스턴스의 자식인지 판별
 */





/** 아니면 assertion 써라 */
function myFunction3 (x :number | string ) {
    
    let array :number[] = [];
    // assertion : 확정되지 않은 변수의 타입을 as 타입으로 엎어줘
    array[0] = x as number;

}

/** assertion 주의점
 *      1) assertion은 여러개 있는 타입을 하나로 확정지어주는 역할이지 타입 A를 B로 바꿔주는 역할이 아님
 *          ex) let test :string | number 
 *              test as number (o)
 *              let test :number 
 *              test as string (x)
 * 
 *      2) 뭔 타입이 올지 100% 확신할때만 써라
 *          assertion 자체가 변수의 타입을 구라로 뒤집어 엎는 꼴이라서
 *          as 문법 쓰는순간 타입 오류를 잡을 수없음 => typescript 쓰지마라
 *      => 그니까 평상시엔 그냥 narrowing 쓰고 이상한 오류 잡을때만 쓰셈
 *      => + 함수를 문자로 호출해놓고 함수 안에서 as number 라고 선언해도
 *      =>   1. string은 number로 변환되지 않고  2. as 문법 쓰는순간 typescript 해제 이기 때문에 문자 + 1 이렇게 연산됨
 */

 function myFunction4(x :string | number ) :number {
    return (x as number) + 1  
 }
 console.log(myFunction4('123'))


/** assertion 유용한 사용법
 *      => 타입을 강제로 부여하는 기계를 하나 만들어 쓰고 싶을때 사용 하자
 *          
 */
type person = {
    name : string
}
function translater<T>(data : string) : T {
    return JSON.parse(data) as T;
}
const jake = translater<person>('{"name" : "kim"}')


/** 예제1 :  숫자여러개를 array 자료에 저장해놨는데
 *           가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
 *           이걸 클리닝해주는 함수가 필요합니다. 
 *           cleaning( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
 *           [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
 */
// 파라미터 타입 선언
type arrType = (string | number)[];
function cleaning(arr :arrType) :number[] {
    // 리턴 타입과 변수선언
    const result :number[] = [];
    arr.forEach(element => {
        // ★ type이 union 이면 parseFloat, parseInt 안먹는다. ★ 
        // element가 string이면 parseFloat
        if (typeof element === 'string'){
            result.push(parseFloat(element));
        // 아니면 그냥 ㄱ
        } else{
            result.push(element);
        }
    });
    return result;
}
console.log(cleaning([1,'2',3,'4',5]));


let chulsu = { subject : 'math' }
let youngheui = { subject : ['science', 'english'] }
let minsu = { subject : ['science', 'art', 'korean'] }
/** 예제 2 : 위 3개의 object가 있다.
 *           1개만 가르치는 사람은 문자로, 2개이상 가르치는 사람은 배열로 저장되있음
 *           object를 하나 집어넣으면 그 사람이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어보자.
 *           그리고 타입지정도 하자
 */
function subject(person :{subject : string | string[]}) :string {
    if (typeof person.subject === 'string') {
        return person.subject;
    // Array타입은 typeof 못씀 => Array.isArray(array)로 판별하자
    }else {
        return person.subject[person.subject.length - 1];
    }
}
 console.log(subject(minsu));
