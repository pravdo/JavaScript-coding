//global scope
//house
'use strict';
this.table = 'window table';

//function
const cleanTable = function(soap){
   // let that = this;
    //const innerFunction = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
    //}
    //innerFunction(soap);
};

this.garage = {
    table: 'garage table'
};

//inside an object
//let johnsRoom = {
  //  table: 'johns table'
//};
//console.log(johnsRoom.table);

//inside a method
//let johnsRoom = {
  //  table: 'johns table'
//};

//constructor
//let creatRoom = function(name){
  //  this.table = `${name}s table`
//}

class creatRoom{
    constructor(name){
        this.table = `${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}

//creatRoom.prototype.cleanTable = function(soap){
  //  console.log(`cleaning ${this.table} using ${soap}`);
//};

const jillsRoom = new creatRoom('jill');
const johnsRoom = new creatRoom('john');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');
/*
cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'some soap');
cleanTable.call(johnsRoom, 'some soap');
cleanTable.call(jillsRoom, 'some soap');
*/