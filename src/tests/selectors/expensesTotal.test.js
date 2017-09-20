import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expensesTotal';

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = getExpensesTotal([expenses[1]]);
  expect(total).toBe(expenses[1].amount);
});

test('should correctly add up multiple expenses', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(114195);
});
