const reducer = (accumulator, currentValue) => accumulator + currentValue

const getExpensesTotal = (expenses) => {
  if (expenses) {
  const costArray = expenses.map((expense) => {
    return expense.amount
  })
    return costArray.reduce(reducer, 0)
  } else {
    return 0
  }
}

export default getExpensesTotal