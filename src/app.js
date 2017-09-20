import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  expenseActions.addExpense({ description: 'Water bill', amount: 34300 })
);
store.dispatch(
  expenseActions.addExpense({ description: 'Gas bill', amount: 8500, createdAt: 1000 })
);
store.dispatch(
  expenseActions.addExpense({ description: 'Rent', amount: 109500 })
);
// store.dispatch(filterActions.setTextFilter('bill'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
