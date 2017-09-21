import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends Component {
  onSubmit = exp => {
    const { startEditExpense, expense, history: { push } } = this.props;
    startEditExpense(expense.id, exp);
    push('/');
  };

  onClick = () => {
    const { startRemoveExpense, expense: { id }, history: { push } } = this.props;
    startRemoveExpense( id );
    push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(el => el.id === props.match.params.id)
});

export default connect(mapStateToProps, { startEditExpense, startRemoveExpense })(
  EditExpense
);
