import json from './parser';
import read from './reader';

export default class GameSavingLoader {
    static load() {
        const data = read();

        return new Promise((resolve, reject) => {
            data.then(userData => {
                return json(userData);
            }).then(data => {
                resolve(JSON.parse(data));
            }).catch(error => {
                reject(error);
            });
        });
    }

    static async loadAsync() {
        try {
            const data = await read();
            const userData = await json(data);

            return JSON.parse(userData);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}