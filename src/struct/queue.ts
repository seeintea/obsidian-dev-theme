import { QueueType } from './type'
import Node from './node'

// 先进先出队列

class Queue<T> implements QueueType<T> {

    capactity: number
    #head: Node<T> | null
    #tail: Node<T>

    constructor() {
        this.capactity = 0
        this.#head = new Node<T>(undefined)
        this.#tail = new Node<T>(undefined)
        this.#head.next = this.#tail
    }

    *[Symbol.iterator]() {
        let args = []
        let node = this.#head!.next
        while (node !== null) {
            args.push(node.value)
            node = node.next
        }
        yield* args
    }

    push(item: T) {
        if (this.#tail.value !== undefined) {
            const node = new Node<T>(item)
            this.#tail.next = node
            this.#tail = this.#tail.next
        } else {
            this.#tail.value = item
        }

        this.capactity++
    }

    dequeue() {
        if (this.capactity === 1) {
            const node = new Node<T>(undefined)
            this.#head!.next = node
            this.capactity = 0
        } else {
            const node = this.#head!.next!.next
            this.#head!.next = node
            this.capactity--
        }
    }

    isEmpty() {
        return this.capactity === 0 ? true : false
    }

    size() {
        return this.capactity
    }
}

export default Queue