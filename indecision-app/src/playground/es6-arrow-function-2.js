// argument objects - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b
}
console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
    name: 'Adam',
    cities: ['Philidelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived())

// Challenge area

const multiplier = {
    nums: [1, 2, 3, 4, 5],
    multiplyBy: 4,
    multiply() {
        return this.nums.map((num) => num * this.multiplyBy)
    }
}
console.log(multiplier.multiply())