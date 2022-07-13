const massive = [true, true, true, false, true];
let result = massive.filter((item = true) => {
    return item
});

let countElementResult = result.length;
console.log(countElementResult);


let user1 = [1, 2, 3];
let user2 = [1, 2, 3];

function getRandomNumber () {
    user1.Mach.random();
}
console.log (getRandomNumber)

function getRandomNumber2 () {
    user2.Mach.random();
}
console.log (getRandomNumber2)

function play (getRandomNumber, getRandomNumber2) {
    if (getRandomNumber > getRandomNumber2) {
        console.log("Выйграл певый игрок!")
    }  else console.log("Выйграл второй игрок!")
}

play()