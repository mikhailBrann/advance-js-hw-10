import Magician from '../Magician';

test('Magician test', () => {
    const testObj = new Magician("Merlin");
    const expected = {"name": "Merlin", "_attack": 100, "_stoned": false, "_attackDistance": 1, "_health": 80, "_manna": 100};
    
    expect(testObj).toEqual(expected);
});