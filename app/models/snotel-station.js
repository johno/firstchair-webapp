import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('string'),
  elevation: DS.attr('string'),
  summary: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  region: DS.attr('string'),
  token: DS.attr('string'),
  updatedAt: DS.attr('string'),
  last_7_days_snowfall_in: DS.attr('number'),
  last_24_hours_snowfall_in: DS.attr('number')

  //weather: DS.belongsTo('weather')
});
