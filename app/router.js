import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FirstchairENV.locationType
});

Router.map(function() {
  this.route('resorts');
  this.resource('resort', { path: 'resorts/:resort_id' });
});

export default Router;
