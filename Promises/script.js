let promiseToCleanTheRoom = new Promise(function(resolve,reject){

//cleaing the room
let isClean = false;

if(isClean){
    resolve('Clean');
}
else{
    reject('not Clean');
}

});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('the room is ' + fromResolve);
}).catch(function(fromReject){
    console.log('the room is ' + fromReject);
})

//

let cleanRoom = function(){
     return new Promise(function(resolve,reject){
         resolve('Cleaned The Room');
     });
};

let removeGarbage = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' remove Garbage ');
    });
};

let winIcecream = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + ' won Icecream ');
    })
};
/*
cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return winIcecream(result);
}).then(function(reult){
    console.log('finished ' + reult);
})
*/
Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then(
    function(){
        console.log('all finished')
    }
);

Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then(
    function(){
        console.log('one of them is finished')
    }
);