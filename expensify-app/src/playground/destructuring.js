// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Vancouver',
//         temp: 92
//     }
// }

// const { name: firstname = 'Anonymous', age } = person
// console.log(`${firstname} is ${age}`)

// const { city, temp: temperature } = person.location 
// if (city && temperature) {
//     console.log(`It's ${person.location.city} in ${person.location.temp} `)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)





// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania']
// const [, city, state = 'New York'] = address
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$.75']

const [ beverage, , price ] = item

console.log(`A medium ${beverage} costs ${price}`)