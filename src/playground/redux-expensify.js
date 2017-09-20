import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

const setTextFilter = (text = '') => ({ type: 'SET_TEXT_FILTER', text });

const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });
const sortByDate = () => ({ type: 'SORT_BY_DATE' });

const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = (endDate = null) => ({ type: 'SET_END_DATE', endDate });

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      console.log(startDateMatch, endDateMatch, textMatch);

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(state);
  console.log(visibleExpenses);
});

const expenseItem = {
  description: 'mortgage',
  notes: 'regular monthly payment',
  amount: 89500,
  createdAt: 1000
};

const expenseOne = store.dispatch(addExpense(expenseItem));
const expenseTwo = store.dispatch(
  addExpense({ description: 'expense', amount: 100, createdAt: 1000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: 'dog food', amount: 800000, createdAt: -1000 })
);

// store.dispatch(removeExpense(expenseOne.expense));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('O'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(2500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(250));

const demoState = {
  expenses: [
    {
      id: 'abc',
      description: 'mortgage',
      note: 'This is the regular payment',
      amount: 89500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'mortgage',
    sortBy: 'amount', // date or amount
    startDate: null,
    endDate: null
  }
};
