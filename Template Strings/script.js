//let str = 'hello';
let str = `hello

world`;
console.log(str);

let x = `bond`;

let bondline = `my name is ${x}`;

console.log(bondline);

let one = 1;
let two = 2;

let sum = `adding ${one} and ${two} gives me ${one + two}`;

let tagged = function(strArray, ...vals){
    console.log(strArray);
    console.log(vals);
};
 tagged`adding ${one} and ${two} gives me ${one + two}`;

console.log('hello world'.endsWith('orld'));
