const struct = require('../dist/struct.map')
const strcut = require('../dist/struct.map')

test('This is struct bag testing', () => {
    const bag = new strcut.Bag()
    expect(bag.size()).toBe(0)
    expect(bag.isEmpty()).toBe(true)
    bag.add(1)
    bag.add(2)
    let value = []
    for (val of bag) {
        value.push(val)
    }
    value.sort((a, b) => a - b)
    expect(value).toEqual([1, 2])
    expect(bag.size()).toBe(2)
    expect(bag.isEmpty()).toBe(false)
})

test('This is struct queue testing', () => {
    const queue = new struct.Queue()
    expect(queue.size()).toBe(0)
    expect(queue.isEmpty()).toBe(true)
    queue.push(1)
    queue.push(2)
    expect(queue.size()).toBe(2)
    let value = []
    for (val of queue) {
        value.push(val)
    }
    value.sort((a, b) => a - b)
    expect(value).toEqual([1, 2])
    queue.dequeue()
    value = []
    for (val of queue) {
        value.push(val)
    }
    expect(value).toEqual([2])
    expect(queue.size()).toBe(1)
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    expect(queue.size()).toBe(0)
})

test('This is stact stack testing', () => {
    const stack = new strcut.Stack()
    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    stack.push(2)
    let value = []
    for (val of stack) {
        value.push(val)
    }
    value.sort((a, b) => a - b)
    expect(value).toEqual([1, 2])
    stack.pop()
    value = []
    for (val of stack) {
        value.push(val)
    }
    expect(value).toEqual([1])
    expect(stack.size()).toBe(1)
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.size()).toBe(0)
})