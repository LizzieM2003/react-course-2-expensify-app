import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpense extends Component {
  onSubmit = expense => {
    const { startAddExpense, history: { push } } = this.props;
    startAddExpense(expense);
    push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { startAddExpense })(AddExpense);
