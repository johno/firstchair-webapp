import Ember from 'ember';
import { climacon } from './climacon';

function weatherIcon(weather) {
  var weatherClass = {
    chanceflurries: 'sun flurries',
    chancesleet: 'sun sleet',
    chancetstorms: 'lightning',
    cloudy: 'cloud',
    flurries: 'flurries',
    fog: 'fog',
    hazy: 'haze',
    mostlysunny: 'sun cloud',
    partlysunny: 'sun cloud',
    sleet: 'sleet',
    sunny: 'sun',
    windy: 'wind',
    tstorms: 'lightning',
    clear: 'sun',
    chancesnow: 'sun snow',
    snow: 'snow',
    partlycloudy: 'sun cloud',
    mostlycloudy: 'sun cloud',
    chancerain: 'drizzle',
    rain: 'downpour'
  };

  return climacon(weatherClass[weather] || 'sun');
}

export { weatherIcon };

export default Ember.Handlebars.makeBoundHelper(weatherIcon);
