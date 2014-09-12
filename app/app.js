import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'firstchair', // TODO: loaded via config
  Resolver: Resolver
});

Ember.ENV.ACTIVE_MODEL_API_URL = 'http://api.firstchair.io';

loadInitializers(App, 'firstchair');

export default App;
