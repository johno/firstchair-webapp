import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('resorts');
  this.resource('resort', { path: 'resorts/:resort_id' }, function() {
  });

  this.route('forecasts');
  this.resource('forecast', { path: 'forecasts/:forecast_id' }, function() {
  });

  this.route('snotel-stations');
  this.route('snotel-station', { path: 'snotel-stations/:snotel_station_id' }, function() {
  });
});

export default Router;
