import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpensesSummery = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  return (
    <div>
      <p>Viewing {expenseCount} {expenseWord} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
    </div>
)
}

const mapStateToProps = (state, props) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
  }
}

export default connect(mapStateToProps)(ExpensesSummery)