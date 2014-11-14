import DS from 'ember-data';

export default DS.Model.extend({
  temperature: DS.attr('number'),
  summary: DS.attr('string'),
  weather: DS.attr('string'),
  wind: DS.attr('number'),
  humidity: DS.attr('number'),
  visibility: DS.attr('number'),
  cloud_cover: DS.attr('number'),
  pressure: DS.attr('number'),
  ozone: DS.attr('number'),
  precip_intensity: DS.attr('number'),
  precip_probability: DS.attr('number'),
  nearest_storm_distance: DS.attr('number'),

  snotelStation: DS.belongsTo('weather')
});
