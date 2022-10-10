function bingo() {
    let arrAmount = 15;
    let carton = [];
    const crearCarton = function (nums) {
        let values = Math.floor(Math.random() * 30 - 0 + 1);
        if (
            !nums.some(function (element) {
                return element == values;
            })
        ) {
            carton.push(values);
        }
    };
    while (carton.length < arrAmount) {
        crearCarton(carton);
    }

    let count = 0;
    let name = prompt('Welcome to Bingo, what is your name?');

    console.log('Hi ' + name + ', here you go: ' + carton);
    function generateRandom() {
        return Math.floor(Math.random() * (60 - 0 + 1));
    }
    function nexTurn() {
        count++;
        let newNum = generateRandom();
        for (let i = 1; i < carton.length; i++) {
            if (newNum === carton[i]) {
                console.log('I have one! It is: ' + newNum);
                carton[i] = 'X';
            }
        }
        console.log(carton);
        askTurn();
    }

    function askTurn() {
        if (
            carton[0] === 'X' &&
            carton[1] === 'X' &&
            carton[2] === 'X' &&
            carton[3] === 'X' &&
            carton[4] === 'X' &&
            carton[5] === 'X' &&
            carton[6] === 'X' &&
            carton[7] === 'X' &&
            carton[8] === 'X' &&
            carton[9] === 'X' &&
            carton[10] === 'X' &&
            carton[11] === 'X' &&
            carton[12] === 'X' &&
            carton[13] === 'X' &&
            carton[14] === 'X'
        ) {
            console.log(
                'BINGO!! You have finished the game in ' +
                    count +
                    ' times! CONGRATULATIONS.'
            );
            return 0;
        }
        if (
            carton[0] === 'X' &&
            carton[1] === 'X' &&
            carton[2] === 'X' &&
            carton[3] === 'X' &&
            carton[4] === 'X'
        ) {
            console.log('Line 1!');
        }
        if (
            carton[5] === 'X' &&
            carton[6] === 'X' &&
            carton[7] === 'X' &&
            carton[8] === 'X' &&
            carton[9] === 'X'
        ) {
            console.log('Line 2!');
        }
        if (
            carton[10] === 'X' &&
            carton[11] === 'X' &&
            carton[12] === 'X' &&
            carton[13] === 'X' &&
            carton[14] === 'X'
        ) {
            console.log('Line 3!');
        }
        let ask = confirm('Next turn?');
        if (ask === true) {
            nexTurn();
        } else {
            return 0;
        }
    }
    askTurn();
}
bingo();
function newGame() {
    let askGame = confirm('Would you like to play again?');
    if (askGame === true) {
        bingo();
    } else {
        return 0;
    }
}
newGame();
