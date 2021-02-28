
class Car {
    constructor(color){
        this.color = color;
    }
    drive(){
        console.log('driving');
    }
}

let redCar = new Car('red');
console.log(redCar);
/*
let Car = (function(){
    let Car = function(color){
        this.color = color;
    }
    _car.prototype.drive = function(){
        console.log('driving');
    }
    return _car;
})();

console.log(Car);
*/