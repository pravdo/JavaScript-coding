"use strict";
/*
var a = 4; 
let square = () => {
    return a*a
};

console.log(square());
*/
/*
var x = function(){
    this.val = 1;
    setTimeout(() => {
        console.log(this.val)
    },1)
};

var xx = new x();  
*/

var x = (...n) =>{
    console.log(n[0])
};

x(1,2,3);