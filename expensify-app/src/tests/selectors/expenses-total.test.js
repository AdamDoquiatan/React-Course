import getExpensesTotal from '../../selectors/expenses-total'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const action = getExpensesTotal([])
  expect(action).toBe(0)
})

test('should correctly add up a single expense', () => {
  const action = getExpensesTotal([expenses[0]])
  expect(action).toBe(expenses[0].amount)
})

test('should add up multiple expenses', () => {
  const action = getExpensesTotal(expenses)
  expect(action).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})