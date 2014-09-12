import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('resort', 'Resort', {
  needs: ['model:forecast']
});

test('it exists', function() {
  var model = this.subject();
  ok(model);
  ok(model instanceof DS.Model);
});

test('it has a name attribute', function() {
  var resort = this.subject({ name: 'Test Resort' });
  equal(resort.get('name'), 'Test Resort');
});
