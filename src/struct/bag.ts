import { BagType } from './type'

// 背包是一种不支持从中删除元素的集合数据类型

class Bag<T> implements BagType<T> {

    #set: Set<T>
    capacity: number

    constructor() {
        this.#set = new Set<T>()
        this.capacity = 0
    }

    *[Symbol.iterator]() {
        const args = new Array(...this.#set)
        yield* args
    }

    add(item: T) {
        if (!this.#set.has(item)) {
            this.#set.add(item)
            this.capacity++
        }
    }

    isEmpty() {
        return this.capacity === 0 ? true : false
    }

    size() {
        return this.capacity
    }
}


export default Bag