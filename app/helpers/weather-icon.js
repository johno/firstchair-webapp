import Ember from 'ember';

function weatherIcon(weather) {
  if(weather == 'cloudy') {
    return new Ember.Handlebars.SafeString('<i class="climacon cloud"></i>');
  } else if(weather == 'partlycloudy') {
    return new Ember.Handlebars.SafeString('<i class="climacon sun cloud"></i>');
  } else if(weather == 'mostlycloudy') {
    return new Ember.Handlebars.SafeString('<i class="climacon sun cloud"></i>');
  } else {
    return new Ember.Handlebars.SafeString('<i class="climacon sun"></i>');
  }
}

export { weatherIcon };

export default Ember.Handlebars.makeBoundHelper(weatherIcon);
