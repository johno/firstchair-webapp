import DS from 'ember-data';

export default DS.Model.extend({
  startsAt: DS.attr('string'),
  endsAt: DS.attr('string'),
  weather: DS.attr('string'),
  highs: DS.attr('string'),
  lows: DS.attr('string'),

  resort: DS.belongsTo('resort')
});
