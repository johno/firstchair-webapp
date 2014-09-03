import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var resort = this.store.find('resort', params.resort_id);
    console.log(resort);
    console.log(resort.forecast);
    return resort;
  }
});
