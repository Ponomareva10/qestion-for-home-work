const massive = [true, true, true, false, true];
let result = massive.filter((item = true) => {
    return item
});

let countElementResult = result.length;
console.log(countElementResult);


let user1 = ['k', 'n', 'b'];
let user2 = ['k', 'n', 'b'];

function getRandomNumber () {
    user1.Mach.random();
}
console.log (getRandomNumber)

function getRandomNumber2 () {
    user2.Mach.random();
}
console.log (getRandomNumber2)

function win (getRandomNumber, getRandomNumber2){
    if ('k', 'n'  || 'n', 'b') {
        console.log("Выйграл певый игрок!")
    }   else if ('n', 'k' || 'b', 'n') {
        console.log("Выйграл второй игрок!")
    }   else console.log ("НИЧЬЯ!")
}

win()
