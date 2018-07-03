// function square (x) {
//     return x * x
// }

// console.log(square(3))

// // const squareArrow = (x) => {
// //     return x * x
// // }

// const squareArrow = (x) => x * x

// console.log(squareArrow(9))

const getFirstName = (fullName) => {
    const firstName = fullName.split(' ')[0]
    return firstName
}

const getLastName = (fullName) => fullName.split(' ')[1]

console.log(getFirstName('Adam Doquiatan'))
console.log(getLastName('Adam Doquiatan'))