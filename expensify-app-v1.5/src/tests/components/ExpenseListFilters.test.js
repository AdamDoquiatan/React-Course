import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />)
}) 

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt date correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'some new text'
  wrapper.find('input').simulate('change', {
   target: { value }
 })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
}) 

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  })
  const value = 'date'
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenLastCalledWith()
}) 

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount'}
  })
  expect(sortByAmount).toHaveBeenLastCalledWith()
}) 

test('should handle date changes', () => {
  const date = { startDate: '1', endDate: '5'}
  wrapper.find('DateRangePicker').prop('onDatesChange')(date)
  expect(setStartDate).toHaveBeenLastCalledWith(date.startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(date.endDate)
}) 

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
}) 