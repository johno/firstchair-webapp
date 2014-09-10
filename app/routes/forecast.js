import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log('hello');
    return this.store.find('forecast', params.forecast_id);
  }
});
