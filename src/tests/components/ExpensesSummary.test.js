import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={2} expenseTotal={9434} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with a single expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expenseTotal={9434} />
  );
  expect(wrapper).toMatchSnapshot();
});
