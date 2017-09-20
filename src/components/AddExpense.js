import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpense extends Component {
  onSubmit = expense => {
    const { addExpense, history: { push } } = this.props;
    addExpense(expense);
    push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addExpense })(AddExpense);
