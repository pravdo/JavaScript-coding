/*
let x = function(){
    console.log('i am called from inside a function')

};

let y = function(callback){
    console.log('do something');
    callback();
}

y(x);
*/

/*
let calc = function(num1, num2, calcType){
    if(calcType === "add"){
        return num1+num2;
    }
    else if (calcType === "multiply"){
        return num1*num2;
    }
};

console.log(calc(2,3,'add')); 
*/
//-------------------------------
/*
let add = function(a,b){
    return a+b;
};

let multiply = function(a,b){
    return a*b;
};

let doWhatever = function(a,b){
    console.log(`two nums back ${a},${b}`);
};

let calc = function(num1, num2, callback){
    if (typeof callback ==="function"){
    return callback(num1, num2);
    }
};

console.log(calc(2,3, function(a,b){ 
    return a-b 
}));
*/

var myArr=[{
    num: 5,
    str: 'apple'
},
{
    num: 7,
    str:'cabbage'
},
{
    num: 1,
    str: 'ban'
}];

myArr.sort(function(val1,val2){
    if(val1.num < val2.num){
        return -1;
    }
    else{
        return 1;
    }
});

console.log(myArr);