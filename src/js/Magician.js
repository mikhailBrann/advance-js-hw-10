import Chapter from "./Chapter";

export default class Magician extends Chapter {
    constructor(name) {
        super(name);
        this._health = 80;
        this._manna = 100;
    }
}