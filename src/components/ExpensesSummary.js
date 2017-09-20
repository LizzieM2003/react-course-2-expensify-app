import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import selectExpensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';

numeral.locale('en-gb');

export class ExpensesSummary extends Component {
  render() {
    const { expenseCount, expenseTotal } = this.props;
    return (
      <div>
        <p>
          Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'}, totalling{' '}
          {numeral(expenseTotal / 100).format('$0,0.00')}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ expenses, filters }) => {
  const selectedExpenses = selectExpenses(expenses, filters);
  return {
    expenseCount: selectedExpenses.length,
    expenseTotal: selectExpensesTotal(selectedExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
