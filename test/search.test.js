const search = require('../dist/search.min')


test('find target 6 index = 5', () => {
    expect(search.binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5)
})

test('find target 9 not found', () => {
    expect(search.binarySearch([1, 2, 3, 4, 5, 6], 9)).toBe(-1)
})

test('find target 1 not found', () => {
    expect(search.binarySearch([], 1)).toBe(-1)
})

test('find target 1 index = 0', () => {
    expect(search.binarySearch([1], 1)).toBe(0)
})