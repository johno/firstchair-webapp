import DS from 'ember-data';

export default DS.Model.extend({
  startsAt: DS.attr('string'),
  endsAt: DS.attr('string'),
  weather: DS.attr('array'),
  highs: DS.attr('array'),
  lows: DS.attr('array'),

  resort: DS.belongsTo('resort'),

  days: function() {
    var weather = this.get('weather');
    var highs = this.get('highs');
    var lows = this.get('lows')
    return this.get('weather').map(function(currWeather, index) {
      return {
        weather: currWeather,
        high: highs[index],
        low: lows[index]
      };
    });
  }.property('weather', 'highs', 'lows')
});
