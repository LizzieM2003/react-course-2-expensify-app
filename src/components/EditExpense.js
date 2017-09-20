import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends Component {
  onSubmit = exp => {
    const { editExpense, expense, history: { push } } = this.props;
    editExpense(expense.id, exp);
    push('/');
  };

  onClick = () => {
    const { removeExpense, expense: { id }, history: { push } } = this.props;
    removeExpense({ id });
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

export default connect(mapStateToProps, { editExpense, removeExpense })(
  EditExpense
);
