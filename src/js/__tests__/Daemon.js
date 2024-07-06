import Daemon from '../Daemon';

test('Daemon test', () => {
    const testObj = new Daemon("Belsevul");
    const expected = {"name": "Belsevul", "_attack": 100, "_stoned": false, "_attackDistance": 1, "_health": 100};
    
    expect(testObj).toEqual(expected);
});