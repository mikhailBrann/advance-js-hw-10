import Chapter from "../Chapter";

test('Chapter test', () => {
    const testObj = new Chapter("Stanislav");
    const expected = {"name": "Stanislav", "_attack": 100, "_stoned": false, "_attackDistance": 1};
    
    expect(testObj).toEqual(expected);
});

test('Chapter attack test', () => {
    const testObj = new Chapter("Stanislav");
    testObj.attack = 2;
    expect(testObj.attack).toEqual(90);

    testObj.attack = 1;
    expect(testObj.attack).toEqual(100);
});


test('Chapter stonned test', () => {
    const testObj = new Chapter("Stanislav");
    testObj.attack = 2;
    testObj.stoned = true;
    expect(testObj.attack).toEqual(85);
    expect(testObj.stoned).toEqual(true);

    testObj.stoned = false;
    expect(testObj.attack).toEqual(90);
});