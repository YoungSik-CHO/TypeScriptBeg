type SquareType = { color : string, width : number}

// type 변수말고 interface로도 타입지정가능
interface SquareType2 {
    color : string; 
    width : number
}


let square : SquareType2 = {color : 'red' , width : 100}


interface School {
    name : string,
    age? : number
}
let 학생 : School = {
    name : 'kim'
}
let 선생 : School = {
    name : 'kim',
    age : 20
}

/** Interface 왜씀 ?
 *  => extends 가능함   +   (& 로 묶어서 사용가능함)
 *  => 중복선언도 가능함 => 이름이 같으면 자동 extends 됨 (type은 안됨)
 *  => 외부 라이브러리는 interface 많이씀 -> 남이 만든거 내가 extend 할때 유용함
 *  => + extend한 interface와 자식 interface에 중복 속성 존재하면? => 에러 (type은? &로 선언할때는 에러안나는데 사용할때 에러난다 => 짜증)
 */
interface Student {
    name : string
}
interface teacher extends Student {
    age : number
}

let 학생2 : Student = {
    name : 'kim'
}
let 선생2 : teacher = {
    name : 'kim',
    age : 20
}

// (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
// 무슨 타입일지는 알아서 기입합시다. 
interface Mat {
    brand : string,
    serialNumber : number,
    model : string[]
}
let 상품 :Mat = { brand : 'Samsung' , serialNumber : 1360 , model : ['TV', 'phone']}


// (숙제2) 아래 코드의 인터페이스를 만드셈
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
interface ShopBag {
    product : string,
    price : number
}
let 장바구니 : ShopBag[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

// (숙제3) (숙제2)의 서비스가 업데이트 되어서 card 속성이 들어가야함
interface NewShopBag extends ShopBag {
    card : boolean
}
let New장바구니 : NewShopBag = { product : '청소기', price : 7000, card : false }

// (숙제4) object 안에 함수를 2개 넣고 싶은데요 
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
// 이 object 자료를 어떻게 만들면 될까요? 
// interface를 이용해서 object에 타입지정도 해보십시오. 
interface ObjectInterface {
    plus : (a : number , b : number) => number,
    minus : (a : number , b : number) => number,
}
let object :ObjectInterface = {
    plus(a,b){
        return a + b
    },
    minus(a,b) {
        return a - b
    }
}

console.log(object.plus(1,2))
console.log(object.minus(4,7))