import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('snotel-station', params.snotel_station_id);
  }
});
