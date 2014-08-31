import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('resort', 'Resort', {
  // Specify the other units that are required for this test.
  needs: []
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

test('it has the fullDescription property', function() {
  var resort = this.subject({ name: 'Test Resort', state: 'ID' });
  equal(resort.get('fullDescription'), 'Test Resort, ID');
});

test('it changes the fullDescription property when name changes', function() {
  var resort = this.subject({ name: 'Test Resort', state: 'ID' });

  Ember.run(function() {
    resort.set('name', 'New Test Resort');
  });
  equal(resort.get('fullDescription'), 'New Test Resort, ID');
});
