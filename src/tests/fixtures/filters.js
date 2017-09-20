import moment from 'moment';

export const filters = {
  text: '',
  sortBy: 'date',
  startdate: null,
  endDate: null
};

export const altFilters = {
  text: 'bills',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};
