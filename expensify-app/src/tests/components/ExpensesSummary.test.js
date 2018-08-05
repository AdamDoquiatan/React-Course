import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummery } from '../../components/ExpensesSummary'
import selectExpenses from '../../selectors/expenses'
import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'
import filters from '../fixtures/filters'

test('should render ExpensesSummery correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummery
    expenseCount={1} 
    expensesTotal={235}
  />)
})

test('should render ExpensesSummery correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummery
    expenseCount={23} 
    expensesTotal={54325}
  />)
  expect(wrapper).toMatchSnapshot()
})

