import Ember from 'ember';

function wiClassFromWunderground(weatherType) {
  var wiClass = { 
    chanceflurries: 'snow',
    chancerain: 'day-sprinkle',
    chancesleet: 'day-sprinkle',
    chancesnow: 'snow',
    chancetstorms: 'storm-showers',
    clear: 'day-sunny',
    cloudy: 'day-cloudy',
    flurries: 'snow',
    fog: 'day-fog',
    hazy: 'smog',
    mostlycloudy: 'day-cloudy',
    mostlysunny: 'day-cloudy',
    partlycloudy: 'day-cloudy',
    partlysunny: 'day-cloudy',
    sleet: 'day-rain-mix',
    rain: 'day-rain',
    snow: 'snow',
    sunny: 'day-sunny',
    tstorms: 'day-thunderstorm'
  };

  return wiClass[weatherType] || 'sunny';
}

export { wiClassFromWunderground };

export default Ember.Handlebars.makeBoundHelper(wiClassFromWunderground);
