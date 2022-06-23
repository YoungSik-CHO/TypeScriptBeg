// 새로운 인스턴스의 값을 수정하고플때 public
// public 키워드는 변수 만들때 숨겨져 있음ㅋ 안써도됨
var User1 = /** @class */ (function () {
    function User1(a) {
        this.name = 'kim';
        this.familyName = 'kim'; // 성은 못바꾸니까 private 처리 해야 자식이 값을 못바꿈
        this.name = a + this.familyName;
    }
    User1.prototype.changeFamilyName = function () {
        this.familyName = 'park';
    };
    return User1;
}());
var 유저1 = new User1('111');
// private 변수는 인스턴스가 수정할 수 없음
// private은 class 선언된 {} 안에서만 변경 가능함.
// {} 밖에서는 없는셈 침
// 유저1.name 
유저1.changeFamilyName();
console.log(유저1);
// 생성자로 변수를 받아 저장하고싶을때 좀더 간단한 방법도 있음
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var 사람1 = new Person3('kim');
console.log(사람1.name);
/** Private : 상속받은 class는 변수 못씀,  인스턴스도 못씀
 *  Protected : 상속받은 class가 변수 쓸수 있음, 인스턴스는 못씀
 *  public : 상속받은 class가 변수 쓸수 있음, 인스턴스도 쓸수 있음
 *  static : 상속받은 class가 못씀, 인스턴스도 못씀, 부모 자체에서 쓸수 있음
 *           ( ex) let 자식 = new User(); console.log(자식.x)(x) , console.log(User.x)(o) )
 */
// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var UserQuiz1 = /** @class */ (function () {
    function UserQuiz1() {
        this.z = 30;
    }
    UserQuiz1.prototype.addOne = function (a) {
        UserQuiz1.x = UserQuiz1.x + a;
    };
    UserQuiz1.x = 10;
    UserQuiz1.y = 20;
    return UserQuiz1;
}());
// x : 상속받은 class는 사용할 수 없고, 인스턴스도 사용할 수 없지만 static이 붙었기 때문에 UserQuiz1.x 처럼 쓸 수 있음
//     private static 이면 class 내부 에서만 값 수정이 가능
// y : class 내외부 모두 사용 및 수정 가능
// z : 인스턴스는 사용할 수 없지만 상속받은 class는 사용 가능
// (숙제2)private static 속성 값에 숫자 더하기
new UserQuiz1().addOne(3);
new UserQuiz1().addOne(4);
// (숙제3) 네모.draw()를 할 때마다
//         index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치되어야합니다.
var Square2 = /** @class */ (function () {
    function Square2(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square2.prototype.draw = function () {
        var a = Math.random();
        var square2 = "<div style= \"position:relative;\n                      top:".concat(a * 400, "px;\n                      left:").concat(a * 400, "px;\n                      width:").concat(this.width, "px;\n                      height:").concat(this.height, "px;\n                      background:").concat(this.color, "\"></div>");
        //        document.body.insertAdjacentElement('beforeend', square2);
    };
    return Square2;
}());
var 네모 = new Square2(30, 30, 'red');
네모.draw();
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
