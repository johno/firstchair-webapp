import Ember from 'ember';

function prettyTemperature(temperature) {
  return new Handlebars.SafeString(Math.round(temperature) + '&#176;F');
}

export { prettyTemperature };

export default Ember.Handlebars.makeBoundHelper(prettyTemperature);
