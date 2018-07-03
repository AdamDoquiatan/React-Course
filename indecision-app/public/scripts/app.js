'use strict';

// argument objects - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments)
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

var user = {
    name: 'Adam',
    cities: ['Philidelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    nums: [1, 2, 3, 4, 5],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.nums.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
