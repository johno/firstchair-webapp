import Ember from 'ember';

function forecastDateFormat(date, daysSince) {
  return moment(date).endOf('day').add(daysSince + 1, 'days').format('M/D');
}

export { forecastDateFormat };

export default Ember.Handlebars.makeBoundHelper(forecastDateFormat);
