const isAdult = (age) => age >= 18 ? true : false
const canDrink = (age) => age >= 19 ? true : false
export default (age) => age >= 65 ? true : false

export { isAdult, canDrink }