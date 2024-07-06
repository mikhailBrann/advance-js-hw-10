import Chapter from './Chapter';

export default class Daemon extends Chapter {
    constructor(name) {
        super(name);
        this._health = 100;
    }
}