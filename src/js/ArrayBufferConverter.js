export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    return (input => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);

        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }

        return buffer;
    })(data);
}

export default class ArrayBufferConverter {
    constructor() {
        this._buffer = null;
    }

    load(buffer) {
        this._buffer = buffer;
        this._bufferView = new Uint16Array(this._buffer);
    }

    toString() {
        if(!this._buffer) {
            return false;
        }

        let result = '';

        for(const char of this._bufferView) {
            result += String.fromCharCode(char);
        }

        return result;
    }
}