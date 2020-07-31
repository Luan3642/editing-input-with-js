function fakeBin() {
    let x = [1, 6, 4, 9]
    let newList = []
    for (let j = 0; j < x.length; j++) {
        for (let i of x) {
            if (i < 5) {
                newList[j] = 0
            } else if (i > 5) {
                newList[j] = 1
            }
        }
    }
    return x;
}