const sum = require('./main');

test('add',()=>{
    expect(sum.sum(1,2)).toBe(3);
});

test('multiply',()=>{
    expect(sum.multiply(4,4)).toBe(16);
});