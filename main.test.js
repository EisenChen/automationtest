const sum = require('./main');

test('add',()=>{
    expect(sum(1,2)).toBe(3);
});