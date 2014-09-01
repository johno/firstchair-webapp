import Ember from 'ember';

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
    tstorms: 'lightning',
    clear: 'sun',
    chancesnow: 'sun snow',
    snow: 'snow',
    partlycloudy: 'sun cloud',
    mostlycloudy: 'sun cloud',
    chancerain: 'drizzle',
    rain: 'downpour'
  };

  return new Ember.Handlebars.SafeString('<i class="climacon ' + weatherClass[weather] + '"></i>');
}

export { weatherIcon };

export default Ember.Handlebars.makeBoundHelper(weatherIcon);
