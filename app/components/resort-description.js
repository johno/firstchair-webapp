import Ember from 'ember';
import { weatherIcon } from '../helpers/weather-icon';

export default Ember.Component.extend({
  name: '',
  state: '',

  fullDescription: function() {
    return this.get('name') + ', ' + this.get('state');
  }.property('name', 'state'),

  weatherDescription: function() {
    return weatherIcon(this.get('weather'));
  }.property('weather')
});
