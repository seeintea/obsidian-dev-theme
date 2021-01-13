const stack = require('../dist/stack.map')

test('doubleStackValuation test', () => {
    let str = '(1+1)'
    expect(stack.doubleStackValuation(str)).toBe(2)
    str = '(((1+2)*3)/9)'
    expect(stack.doubleStackValuation(str)).toBe(1)
    str = ''
    expect(stack.doubleStackValuation(str)).toBe(0)
    str = '  '
    expect(stack.doubleStackValuation(str)).toBe(0)
    str = '(3 - 2)'
    expect(stack.doubleStackValuation(str)).toBe(1)
})