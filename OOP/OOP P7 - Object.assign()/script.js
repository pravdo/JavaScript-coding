let toyota = {
    drive(){
        return 'driving toyota';
    },
    break(){
        return 'breaking toyota';
    }
};

/*
let camry = {
    drive(){
        return 'driving camry';
    }
};
*/

Object.assign(toyota, {
    wifi(){
        return 'using wifi';
    }, color: 'red'
});
//console.dir(camry.drive());
console.dir(toyota);
//--------------------------------------------------------------
let c1 = function(x,y,z){
    Object.assign(this, {x,y,z});
}