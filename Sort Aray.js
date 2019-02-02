function sortAray(arrayOfNumbers, method) {

    if (method === 'asc') {
        arrayOfNumbers.sort((a, b) => a - b);
    } else if (method === 'desc') {
        arrayOfNumbers.sort((a, b) => b - a);
    }
    console.log(arrayOfNumbers)
}

sortAray([14, 7, 17, 6, 8], 'asc')
sortAray([14, 7, 17, 6, 8], 'desc')