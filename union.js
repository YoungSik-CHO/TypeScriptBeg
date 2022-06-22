// Union Type : 2개이상 타입이 들어올 수 있는 변수를 만들때
// 아래 두가지다 오류없이 사용가능
var member = 'kim';
member = 123;
// 1) 숫자 or 문자 둘다 가능 한 array 타입
var members = [1, '2', 3]; // array는 소괄호 묶어야됨
var memberObject = { a: '123' };
// 2) any 타입 : 모든 자료형 허용해줌 => 타입 없음 => 대입된 값이 뭐든 타입 안가짐 => Javascript랑 차이없음 
//              아무짓거리 안하고 변수 만들면 any타입이 할당됨
var anyMember = 123;
anyMember = '123';
// 3) unknown 타입 : (any처럼)모든 자료형 허용해줌 => 대신 타입있음 => 대입된 값의 타입을 가짐
var name2;
// name -1 unknown에 연산안됨
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 4) ? 연산자 
//  number? == number | undefined  <= 원리
// 주로 일반적으로 할당된 변수에는 사용안하고 함수 내 파라미터 안에 해당 파라미터는 받을 수도 있고 안받을 수도 있을때 사용함
function 함수(x) {
    // console.log(x + 3) - 해당코드 작성 안됨. x는 number도 아니고 string도 아닌 number | string 타입이다.
    // 따라서 받은 변수 x가 number면 연산하고 string이면 3을 붙여야하는데, 해당 타입확정을 위해 narrowing 을 씀
}
함수(2);
// Quiz) '234' 를 파라미터로 넣으면 3을 return 하고 '1234567'을 파라미터로 넣으면 7을 return 하는
//       받은 파라미터의 자릿수를 리턴하는 함수를 만들어
function Quiz1(x) {
    return x.toString().length;
}
function Quiz2(monthpay, ishome, appc) {
    var monthpaypoint = Math.floor(monthpay / 10000);
    if (ishome) {
        monthpaypoint = monthpaypoint + 500;
    }
    else
        monthpaypoint = monthpaypoint;
    if (appc == '상') {
        monthpaypoint = 100;
    }
    if (monthpaypoint >= 600) {
        return '결혼가능';
    }
}
Quiz2(550, false, '하');
