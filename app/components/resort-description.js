import Ember from 'ember';
import { weatherIcon } from '../helpers/weather-icon';

export default Ember.Component.extend({
  name: '',
  location: '',
  weather: '',

  fullDescription: function() {
    return this.get('name') + ', ' + this.get('location');
  }.property('name', 'location'),

  weatherDescription: function() {
    return weatherIcon(this.get('weather'));
  }.property('weather')
});
