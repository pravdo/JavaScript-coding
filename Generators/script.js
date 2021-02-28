/*
function *generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/
/*
function *infiniteMaker(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
 let iterator = infiniteMaker();
 console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/
function *generator(){
    yield 1;
    yield *anotherGen();
    return 'hello';
    yield 3;
};

function *anotherGen(){
    yield 2;
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function request(url){
    return new Promise(function(resolve, reject){
        makeAjaxCall(url, function(err,text){
            if(err) reject(err);
            else resolve(text);
        });
    });
};

function *generator(){
    yield request('url1');
    yield request('url2');
}