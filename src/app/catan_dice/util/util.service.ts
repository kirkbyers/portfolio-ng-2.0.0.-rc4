import {Injectable} from '@angular/core';

@Injectable()
export class Die {
    size: number;
    value: number;
    keep: boolean;

    creatDie (dieSize: number) {
        this.size = dieSize;
        this.value = Math.floor(Math.random() * (this.size - 1 + 1)) + 1;
        this.keep = false;
    }

    roll () {
        this.value = Math.floor(Math.random() * (this.size - 1 + 1)) + 1;
    }

}

export class Turn {
    totalRolls = 0;
}
