import { weatherIcon } from 'firstchair/helpers/weather-icon';

module('WeatherIconHelper');

test('it has the proper classes', function() {
  var result = weatherIcon('chanceflurries');
  ok(result.toString().indexOf('climacon sun flurries') > 0);
});
