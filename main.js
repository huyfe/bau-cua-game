import { XucXac } from "./modules/enum.js";

class BauCuaGame {
    constructor() {
        this.xucXac1 = null;
        this.xucXac2 = null;
        this.xucXac3 = null;
        this.coin = 0;
        this.currentChoice = {
            xucXac1: null,
            xucXac2: null,
            xucXac3: null,
        };
    }

    roll() {
        this.setResult();
        console.log(this.getResult());
        return true;
    }

    setResult() {
        this.xucXac1 = this.getRandomXucXac(XucXac.length);
        this.xucXac2 = this.getRandomXucXac(XucXac.length);
        this.xucXac3 = this.getRandomXucXac(XucXac.length);
        return true;
    }

    getResult() {
        return { xucXac1: this.xucXac1, xucXac2: this.xucXac2, xucXac3: this.xucXac3 };
    }

    getRandomXucXac(max) {
        const index = Math.floor(Math.random() * max);
        return XucXac[index];
    }

}

const bauCuaGame = new BauCuaGame();

console.log(bauCuaGame.getResult());
console.log(bauCuaGame.roll());