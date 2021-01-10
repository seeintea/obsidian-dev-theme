import { StackType } from './type'
import Node from './node'

class Stack<T> implements StackType<T> {
    capactity: number
    private head: Node<T> | null

    constructor() {
        this.capactity = 0
        this.head = new Node<T>(undefined)
    }

    *[Symbol.iterator]() {
        let args = []
        let node = this.head
        while (node !== null && this.capactity !== 0) {
            args.push(node.value)
            node = node.next
        }
        yield* args
    }

    push(item: T) {
        if (this.head!.value !== undefined) {
            const val = this.head!.value
            const node = new Node<T>(val)
            node.next = this.head!.next
            this.head!.next = node
            this.head!.value = item
        } else {
            this.head!.value = item
        }
        this.capactity++
    }

    pop() {
        if (this.capactity === 1 || this.capactity === 0) {
            this.head!.value = undefined
            this.capactity = 0
        } else {
            const node = this.head!.next
            this.head!.value = node!.value
            this.head!.next = node!.next
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


export default Stack