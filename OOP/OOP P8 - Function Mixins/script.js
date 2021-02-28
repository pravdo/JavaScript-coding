const jsSkill = {
    knowsJS(){
        return true;
    }
};

const engDegree = {
    hasDegree(){
        return true;
    }
};

const backendSkill = {
    knowsBackend(){
        return true;
    }
}

const jsEngineer = Object.assign({}, jsSkill, engDegree);

console.log(jsEngineer);
const fullstackEngineer = Object.assign({}, jsSkill, backendSkill, engDegree);

console.log(fullstackEngineer.hasDegree());
console.log(fullstackEngineer.knowsBackend());
console.log(fullstackEngineer.knowsJS());
//----------------------------------------------------------------------------
let Car = function (color) { //constructor
    let moving = false;
    //this.color = color;
    return Object.assign({},{
        color: color,
        drive(){
            moving = true;
            return this;
        }, isMoving(){
            return moving;
        }
    });
};

let redCar = new Car('red');
console.log(redCar.drive().isMoving());
//----------------------------------------------------------------------------------
const humanFactory = function (obj){
    let isCrying = false;

    return Object.assign({}, obj,{
        cry(){
            isCrying = true;
            return this;
        }, isCrying(){
            return isCrying;
        }
    });
};

const flyFactory = function (obj) {
    let isFlying = false;

    return Object.assign({}, obj, {
        fly(){
            isFlying = true;
            return this;
        }, isFlying(){
            return isFlying;
        }
    });
};

const superman = humanFactory(flyFactory({}));

console.log(superman.fly().cry().isCrying());
console.log(superman.isFlying());