import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  region: DS.attr('string'),
  token: DS.attr('string'),
  weather: DS.attr('string'),
  temperature: DS.attr('integer'),
  last_24_hours_snowfall: DS.attr('integer'),
  wind: DS.attr('integer'),
  conditions: DS.attr('string'),
  human_readable_weather: DS.attr('string')
});
