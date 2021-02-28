let toyota = {
    drive(){
        return 'driving toyota';
    }
};

let camry = {
    //wifi(){
      //  return 'using wifi';
    //}
    drive(){
        return `${super.drive()} camry`;
    }
};

Object.setPrototypeOf(camry,toyota);
console.dir(camry.drive());
//console.dir(camry.wifi());