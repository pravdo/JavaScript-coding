class Mammal{
    constructor(_legs, _name = "gancho"){
        this.legs = _legs;
        this.name = _name;
        this.warmBlooded = true;
    }
    walk(){
        return `${this.name} is walking`
    };
};

class Bat extends Mammal{
    constructor(_legs, _name, _eatsMeat){
       super(_legs,_name);
       this._eatsMeat = _eatsMeat;
    }
    fly(){
        return `${this.name} is flying`;
    }
    walk(){
        let holding = this._eatsMeat ? 'bug' : 'carrot';
        return `${super.walk()} with a ${holding}`;
    }
}

let fruitBat = new Bat(4, 'peter', false);
console.log(fruitBat);
console.log(fruitBat.walk());
//--------------------------------------------------------------
class Mammal1{
    constructor(a,b,c,d,e){
        Object.assign(this, {a,b,c,d,e});
    }
}

class Bat1 extends Mammal1{
    constructor(f, ...args){
        super(...args);
        this.f = f;
    }
}

const newBat = new Bat1('f','a','b','c','d','e');
console.log(newBat);