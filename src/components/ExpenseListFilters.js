import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDate, setEndDate } = this.props;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortByChange = e => {
    const { sortByDate, sortByAmount } = this.props;
    e.target.value === 'date' ? sortByDate() : sortByAmount();
  };

  render() {
    const { filters: { text, sortBy, startDate, endDate } } = this.props;

    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search Expenses"
              value={text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select "
              value={sortBy}
              onChange={this.onSortByChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              endDate={endDate} // momentPropTypes.momentObj or null,
              onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
              focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
              showClearDates
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps, {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
})(ExpenseListFilters);
