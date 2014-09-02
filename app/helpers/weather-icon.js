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

  return climacon(weatherClass[weather])
}

// TODO: Break this into it's own helper.
function climacon(iconClass) {
  return new Ember.Handlebars.SafeString('<i class="climacon ' + iconClass + '"></i>');
}

export { weatherIcon };

export default Ember.Handlebars.makeBoundHelper(weatherIcon);
