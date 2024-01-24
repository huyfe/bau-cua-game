import { DiceName, ArrayDice } from "./modules/enum.js";

class BauCuaGame {
    constructor() {
        this.dice1 = null;
        this.dice2 = null;
        this.dice3 = null;
    }

    setResult() {
        this.dice1 = this.getRandomXucXac(ArrayDice.length);
        this.dice2 = this.getRandomXucXac(ArrayDice.length);
        this.dice3 = this.getRandomXucXac(ArrayDice.length);
        return true;
    }

    getResult() {
        return [this.dice1, this.dice2, this.dice3];
    }

    getRandomXucXac(max) {
        const index = Math.floor(Math.random() * max);
        return ArrayDice[index];
    }
}

class UserBauCuagame extends BauCuaGame {
    constructor() {
        super();
        this.coin = 0;
        this.userChoice = [];
    }

    // Toggle picking when user pick dice
    userPick(diceName, coinBet = 0) {
        let diceNameIsExist = false;
        if (this.userChoice.length > 0) {
            this.userChoice.forEach((element, index) => {
                if (element.diceName === diceName) {
                    this.userChoice.splice(index, 1);
                    diceNameIsExist = true;
                }
            })
        }
        if (this.userChoice.length === 0 || !diceNameIsExist) {
            const newPick = {
                diceName,
                coinBet
            }
            this.userChoice.push(newPick);
        }
    }

    roll() {
        if (!this.userChoice.length) {
            console.warn('You must select one dice at least');
            return false;
        }

        this.setResult();

        const result = this.getResult();

        for (var i = 0; i < this.userChoice.length; i++) {
            let isWinPerDice = false;
            for (var j = 0; j < result.length; j++) {
                if (this.userChoice[i].diceName === result[j]) {
                    this.coin += this.userChoice[i].coinBet;
                    isWinPerDice = true;
                }
            }
            isWinPerDice === false && (this.coin -= this.userChoice[i].coinBet);
        }

        return this.getResult();
    }
}

const bauCuaGame = new UserBauCuagame();
// bauCuaGame.userPick(DiceName.BAU, 500);
// bauCuaGame.userPick(DiceName.CA, 500);
// bauCuaGame.userPick(DiceName.NAI, 500);
bauCuaGame.userPick(DiceName.TOM, 500);
// bauCuaGame.userPick(DiceName.GA, 500);
// bauCuaGame.userPick(DiceName.CUA, 500);
console.log("Your choice: ", bauCuaGame.userChoice);
console.log("Result: ", bauCuaGame.roll());
console.log("Your coin: ", bauCuaGame.coin);    