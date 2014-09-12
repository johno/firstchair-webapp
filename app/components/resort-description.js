import Ember from 'ember';
import { weatherIcon } from '../helpers/weather-icon';

export default Ember.Component.extend({
  name: '',
  location: '',
  weather: '',

  resortLocation: function() {
    return this.get('location');
  }.property('location'),

  resortName: function() {
    return this.get('name');
  }.property('name'),

  hasWeather: function() {
    return !!this.get('weather');
  }.property('weather'),

  weatherDescription: function() {
    return weatherIcon(this.get('weather'));
  }.property('weather')
});
