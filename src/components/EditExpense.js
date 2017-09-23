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
    const {
      startRemoveExpense,
      expense: { id },
      history: { push }
    } = this.props;
    startRemoveExpense(id);
    push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
          <button className="button button--secondary" onClick={this.onClick}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(el => el.id === props.match.params.id)
});

export default connect(mapStateToProps, {
  startEditExpense,
  startRemoveExpense
})(EditExpense);
