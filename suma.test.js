const sum = require("./suma");

const callBackTest = () => {
    expect(sum(1,3)).toBe(4);
}

test('add 1 + 3 equl to 4', callBackTest);

