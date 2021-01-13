const doubleStackValuation = (expressions: string): number => {
    expressions = expressions.trim()
    if (expressions.length === 0) return 0

    let args = expressions.split('')

    let val = [],
        ops = []

    for (let i = 0; i < args.length; i++) {
        let value = args[i]
        if (value === '(' || value === " " || value === '（') { }
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            ops.push(value)
        } else if (value === ')' || value === '）') {
            const option = ops.pop()
            let prev: number = parseInt(val.pop()!),
                next: number = parseInt(val.pop()!)

            if (option === '+') { next += prev }
            else if (option === '-') { next -= prev }
            else if (option === '*') { next *= prev }
            else if (option === '/') { next /= prev }
            val.push(next.toString())
        } else {
            val.push(value)
        }
    }
    return parseInt(val[0])
}

export default doubleStackValuation