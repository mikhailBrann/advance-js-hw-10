import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';



test('ArrayBufferConverter test', () => {
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const testObj = new ArrayBufferConverter;
    const buffer = getBuffer();

    expect(testObj.toString()).toEqual(false);

    testObj.load(buffer);
    expect(testObj.toString()).toEqual(expected);
});