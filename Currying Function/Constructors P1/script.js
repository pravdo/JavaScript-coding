'use strict'
/*
let add = function(n1, n2){
    return n1 + n2;
};

let sum = add(1,2);

let Car = function(color){
    this.color = color;
};

let redCar = new Car('red');

console.log(redCar);
*/
/*
let Car = function (color) {
    if (!new.target)
    throw 'Car() must be called with new';
    this.color = color;
  };

  let redCar = new Car('red');

  console.log(redCar.color);
  */


  let Car = function(_color) {
      
    this.setColor = function(color){
         _color = color;
      };
    this.getColor = function(){
          return _color;
      }
    };

    let redCar = new Car('red');

    console.log(redCar.getColor());