console.log('person1: shows ticket');
console.log('person2: shows ticket');
/*
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

 const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: i got the tickets');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: no I need butter');
    return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));
*/
/*const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => reject('ticket'), 3000);
});
/*
const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
const getCandy = new Promise((resolve, reject) => resolve(`candy`));
const getCoke = new Promise((resolve, reject) => resolve(`coke`));
*//*
let ticket
try{
    let ticket = await promiseWifeBringingTicks;
} catch(e){
    ticket = 'sad face';  
}
*/

/*
let [popcorn, candy, coke] = await Promise.dll([getPopcorn, getCandy, getCoke]);
console.log(`${popcorn},${candy},${coke}`);
*//*
return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));
*/

const testUserForm = async () => {

    const loadUserForm = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('page loaded'), 3000);
    });

    const enrerUserName = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('user entered'), 3000);
    });
    const verifyUserDetails = () => {

    }

    await loadUserForm;
    await enrerUserName;
    const testResult = verifyUserDetails();

    return testResult;

}
testUserForm().then((m)=> console.log(`shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');