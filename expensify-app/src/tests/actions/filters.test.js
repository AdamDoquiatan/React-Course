import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from  '../../actions/filters.js'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should setup action for setting the text filter with user input', () => {
  const action = setTextFilter('This is my input')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'This is my input'
  })
})

test('should setup action for setting the text filter with default input', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('this should setup actio for sorting by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('this should setup actio for sorting by amount', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})