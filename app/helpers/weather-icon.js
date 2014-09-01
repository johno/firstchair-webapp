import Ember from 'ember';

function weatherIcon(weather) {
  var weatherClass;
  switch(weather) {
    case 'cloudy':
      weatherClass = 'cloud';
      break;
    case 'partlycloudy':
      weatherClass = 'sun cloud';
      break;
    case 'mostlycloudy':
      weatherClass = 'sun cloud';
      break;
    default:
      weatherClass = 'sun';
  }

  return new Ember.Handlebars.SafeString('<i class="climacon ' + weatherClass + '"></i>');
}

export { weatherIcon };

export default Ember.Handlebars.makeBoundHelper(weatherIcon);
