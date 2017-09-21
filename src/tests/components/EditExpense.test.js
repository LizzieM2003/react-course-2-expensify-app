import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpense
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});

test('should render EditExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id );
  expect(history.push).toHaveBeenLastCalledWith('/');
});
