var Persons = /** @class */ (function () {
    function Persons(a) {
        this.func = function (b) {
            console.log(b);
        };
        this.name = a;
    }
    return Persons;
}());
var person1 = new Persons('kim');
var person2 = new Persons('park');
person1.func('뭐뭐');
console.log(person1.name);
console.log(person2.name);
person2.func('왜왜');
