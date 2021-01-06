// const dass = require('../dist/dass.cjs')

const sort = require('../dist/sort.min')

// quickSort
test('quickSort [9, 5, 3, 5, 7, 1, 3, 5]', () => {
    let args = [9, 5, 3, 5, 7, 1, 3, 5]
    sort.quickSort(args, 0, args.length - 1)
    expect(args).toEqual([1, 3, 3, 5, 5, 5, 7, 9])
})
