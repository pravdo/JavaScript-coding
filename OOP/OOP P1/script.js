/*
var Pizza = {
    crust: 'thin',
    toppings:3,
    hasBacon: true,
    howmanyToppings: function(){
        return this.toppings;
    }
};

Pizza.price = '10$';
console.log(Pizza.howmanyToppings());
//console.log(Pizza.crust);

delete(Pizza.crust);
console.log(Pizza);
*/

/*
var Pizza = function(){
  this.crust = 'thin';
  this.toppings = 3;
  this.hasBacon = true;
};

var PizzaA = new Pizza();
var PizzaB = new Pizza();

PizzaA.crust = 'pan';

console.log(PizzaA.crust);
//console.log(PizzaB instanceof Pizza);
console.log(PizzaB.constructor);
*/

//private
var Pizza = function(){
    var crust = 'thin';
    //this.hasBacon = true;
    var toppings = 3;

   // this.getHasBacon = function(){
    //return this.hasBacon;
    //};

    //this.getCrust = function(){
      //  return crust;
    //};
    var getToppings = function(){
        return toppings;
    };
    var tmp = {};
    tmp.getToppings = getToppings;

    return tmp;

};

var pizzaA = new Pizza();
console.log(pizzaA.getToppings());

//console.log(pizzaA.getHasBacon());
//console.log(pizzaA.getCrust());