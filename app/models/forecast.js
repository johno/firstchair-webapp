import DS from 'ember-data';

export default DS.Model.extend({
  startsAt: DS.attr('string'),
  endsAt: DS.attr('string'),
  weather: DS.attr('array'),
  highs: DS.attr('array'),
  lows: DS.attr('array'),

  resort: DS.belongsTo('resort')
});
