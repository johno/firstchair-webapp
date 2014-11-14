import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('string'),
  elevation: DS.attr('string'),
  summary: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  region: DS.attr('string'),
  token: DS.attr('string')
});
