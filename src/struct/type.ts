export interface NodeType<T> {
    value: T | undefined
    next: NodeType<T> | null
}

export interface LinkList {
    <T>(value: T): NodeType<T>
}

export interface BagType<T> {

    capacity: number

    add: (item: T) => void
    isEmpty: () => boolean
    size: () => number
}

export interface QueueType<T> {

    capactity: number

    push: (item: T) => void
    dequeue: () => void
    isEmpty: () => boolean
    size: () => number
}

export interface StackType<T> {

    capactity: number

    push: (item: T) => void
    pop: () => void
    isEmpty: () => boolean
    size: () => number
}