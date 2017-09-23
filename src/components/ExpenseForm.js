import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';
import { SingleDatePicker } from 'react-dates';

// moment.locale('en-gb');

const now = moment();
console.log(now.format('Do MMM YYYY'));

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    if (props.expense) {
      var { description, amount, createdAt, note } = props.expense;
    }

    this.state = {
      description: props.expense ? description : '',
      note: props.expense ? note : '',
      amount: props.expense ? (amount / 100).toFixed(2) : '',
      createdAt: props.expense ? moment(createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    // const note = e.target.value;
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    const { description, amount, createdAt, note } = this.state;
    e.preventDefault();
    if (!description || !amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description,
        amount: Number(amount) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          className="textarea"
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">{this.props.expense ? 'Save Expense' : 'Add Expense'}</button>
        </div>
      </form>
    );
  }
}
