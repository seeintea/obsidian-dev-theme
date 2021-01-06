// Binary Search  
// leetcode id: 704 [ https://leetcode-cn.com/problems/binary-search/ ]

const binarySearch = (args: Array<number>, target: number): number => {

    let start: number = 0,
        end: number = args.length - 1,
        mid: number = -1,
        result: number = -1

    while (start <= end) {
        mid = (start + end) / 2 >>> 0
        let value: number = args[mid]
        if (value === target) {
            result = mid
            break
        } else if (value < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return result
}

export default binarySearch