class Car {
    constructor(color,price){
        Object.assign(this,{color, price});
    }
    static comparePrice(car1, car2){
        return Math.abs(car1.price - car2.price);
    }
    getColor(){
        return this.color;
    }
}

const redCar = new Car('red', 3000);
const blueCar = new Car('black', 2500);

console.log(redCar.getColor());
console.log(Car.comparePrice(redCar,blueCar));
//------------------------------------------------------------
class Car1 {
    constructor(price){
        this.price = price;
    }
    static sellCar(car){
        return `selling for ${car.price}`;
    }
}
class Toyota extends Car1 {
    constructor(price){
        super(price);
    }
    static sellCar(car){
        return `Toyota ${super.sellCar(car)}`;
    }
}
const canry = new Toyota(1000);

console.log(Toyota.sellCar(canry));