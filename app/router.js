import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FirstchairENV.locationType
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
  this.route('map');
});

export default Router;
