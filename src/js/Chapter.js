export default class Chapter {
    constructor(name) {
        this.name = name;
        this._attack = 100;
        this._stoned = false;
        this._attackDistance = 1;
    }
    get attack() {
        let attackResult = this._attack;

        if(this._stoned) {
            attackResult = attackResult - Math.log2(this._attackDistance) * 5;
        }

        if(this._attackDistance <= 1 || this._attackDistance > 9) {
            return attackResult;
        }

        return attackResult - ((this._attackDistance - 1) * 10);
    }
    set attack(value) {
        if(value < 1 || value > 9) {
            return false;
        }
    
        this._attackDistance = value;
    }
    get stoned() {
        return this._stoned;
    }
    set stoned(value) {
        this._stoned = value;
    }
}