const quickSort = (args: Array<number>, start: number, end: number):void => {
    
    if(start >= end) return

    const base: number = args[start]
    let i: number = start,
        j: number = end

    while(i < j) {
        while (i < j && base <= args[j]) {
            j--;
        }
        if(i < j) {
            args[i] = args[j];
        }
        while (i < j && base >= args[i]) {
            i++;
        }
        if(i < j) {
            args[j] = args[i];
        }
    }
    args[i] = base
    quickSort(args, start, i-1)
    quickSort(args, i+1, end)
    
}

export default quickSort