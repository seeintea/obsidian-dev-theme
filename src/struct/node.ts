import { NodeType } from './type'

class Node<T> implements NodeType<T> {

    value: T | undefined
    next: Node<T> | null

    constructor(item: T | undefined) {
        this.value = item
        this.next = null
    }

}

export default Node