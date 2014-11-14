import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('snotel-stations');
  this.route('snotel-station', { path: 'snotel-stations/:snotel_station_id' }, function() {});
});

export default Router;
