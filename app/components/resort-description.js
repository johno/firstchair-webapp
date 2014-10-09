import Ember from 'ember';

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
    return this.get('weather');
  }.property('weather')
});
