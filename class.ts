type FuncType = (b: string) => void
class Persons {
    name : string;
    constructor(a: string){
        this.name = a;
    }
    func : FuncType = (b) => {
        console.log(b)
    }
}

let person1 = new Persons('kim');
let person2 = new Persons('park');
person1.func('뭐뭐')
console.log(person1.name)
console.log(person2.name)
person2.func('왜왜')