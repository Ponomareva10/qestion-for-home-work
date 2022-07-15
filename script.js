const massive = [true, true, true, false, true];
let result = massive.filter((item = true) => {
    return item
});

let countElementResult = result.length;
console.log(countElementResult);


let user1 = ['k', 'n', 'b'];
let user2 = ['k', 'n', 'b'];

function getRandomNumber() {
    return user1[Math.floor(Math.random() * 3)];
}
console.log (getRandomNumber())

function getRandomNumber2() {
    return user2[Math.floor(Math.random() * 3)];
}
console.log (getRandomNumber2())

function win (getRandomNumber, getRandomNumber2){

    if (getRandomNumber === 'k' && getRandomNumber2 == 'n') {
        console.log("Выйграл певый игрок!");
    }   else if (getRandomNumber === 'b' && getRandomNumber2 === 'k') {
        console.log("Выйграл певый игрок!");
    }   else if (getRandomNumber === 'n' && getRandomNumber2 === 'b') {
        console.log("Выйграл певый игрок!");
    }   else if (getRandomNumber === 'n' && getRandomNumber2 === 'k') {
        console.log("Выйграл второй игрок!");
    }   else if (getRandomNumber === 'b' && getRandomNumber2 === 'n') {
        console.log("Выйграл второй игрок!");
    }   else if (getRandomNumber === 'k' && getRandomNumber2 === 'b') {
        console.log("Выйграл второй игрок!");
    }   else if (getRandomNumber === getRandomNumber2) {
        console.log ("НИЧЬЯ!");
    }       
}

win(getRandomNumber(), getRandomNumber2());
