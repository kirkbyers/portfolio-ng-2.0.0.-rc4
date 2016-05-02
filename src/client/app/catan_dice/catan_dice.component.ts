import {Component, OnInit} from 'angular2/core';

import {Die, Turn} from './util/util.service';

@Component({
    selector: 'catan-dice',
    templateUrl: 'src/client/app/catan_dice/catan_dice.component.html'
})

export class CatanDiceComponent implements OnInit{
    ngOnInit () {
        for(let die of this.dice) {
            die.creatDie(6);
        }
    }

    public dice = [new Die, new Die, new Die, new Die, new Die, new Die];
    public turn = new Turn;

    rollTurn () {
        for(let die of this.dice) {
            if(!die.keep) {
                die.roll();
            }
        }
        this.turn.totalRolls++;
    }

    endTurn () {
        this.turn = new Turn;
        for(let die of this.dice) {
            die.creatDie(6);
        }
    }
}
