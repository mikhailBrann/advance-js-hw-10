import GameSavingLoader from "../GameSavingLoader";

const testObject = {
    id: 9,
    created: 1546300800,
    userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000
    }
};

test("GameSavingLoader load method", async () => {
    const result = await GameSavingLoader.load();
    expect(result).toEqual(testObject);
});

test("GameSavingLoader load loadAsync", async () => {
    const result = await GameSavingLoader.loadAsync();
    expect(result).toEqual(testObject);
});