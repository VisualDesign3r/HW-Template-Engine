const example = require('./../lib/testing');

test('tests the example wrote for Jose pass no params', ()=>{
    expect(example.trueFalse()).toBe(false)
})

test('tests the example wrote for Jose pass null', ()=>{
    expect(example.trueFalse(null)).toBe(false)
})

test('tests the example wrote for Jose pass no params', ()=>{
    expect(example.trueFalse('hello world')).toBe(true)
})

test('tests the example wrote for Jose pass no params', ()=>{
    expect(example.trueFalse(20)).toBe('20')
})
