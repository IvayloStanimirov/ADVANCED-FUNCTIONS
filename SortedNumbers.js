function sortedNumbers() {
    return {
        list: [],
        size: 0,
        add: function (el) {
            this.list.push(el)
            this.size++
            this.sort()
        }
        ,
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1)
                this.size--
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index]
            }
        },
        sort: function () {
            return this.list.sort((a, b) => a - b)
        }
    }
}
let sorted = sortedNumbers();
sorted.add(10)
sorted.add(120)
sorted.add(15)
sorted.add(11)
sorted.remove(0)
console.log(sorted.list)
console.log(sorted.size)
console.log(sorted.get(2))