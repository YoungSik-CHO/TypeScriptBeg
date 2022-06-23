// never type으로 리턴하기
// 1. return 이 없어야함
// 2. endpoint가 없어야함
// => 그게뭔데 ? 무한히 끝나지 않는 함수, 에러를 발생시키는 함수

function neverF(param : string) {
    if (typeof param === 'string') {
       console.log(param);  // string 타입 
    } 
    // 받은 param이 string이 아닌 경우는 절대 없기 때문에 else문은 never type임
    else {
        console.log(param);  // never 타입 
    }
}

let neverF2 = () :never => {
    throw new Error('에러')
}

//  tsconfig.json에서 strict 옵션을 켜둘 경우
//  아래 변수는 any[] 가 아닌 never[] 로 지정되기도 함
let neverarr = [];

// => Never 타입은 "있으면 안되는 타입임" => 찾으면 오류찾아
//    왜냐면 모든 상황을 void로 대체 가능함