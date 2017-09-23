import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import selectExpensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';

numeral.locale('en-gb');

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span>{' '}
        {expenseCount === 1 ? 'expense' : 'expenses'} totalling{' '}
        <span>{numeral(expenseTotal / 100).format('$0,0.00')}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ expenses, filters }) => {
  const selectedExpenses = selectExpenses(expenses, filters);
  return {
    expenseCount: selectedExpenses.length,
    expenseTotal: selectExpensesTotal(selectedExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
