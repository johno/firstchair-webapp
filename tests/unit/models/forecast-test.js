import { test, moduleForModel } from 'ember-qunit';

moduleForModel('forecast', 'Forecast', {
  needs: ['model:resort']
});

test('it exists', function() {
  var model = this.subject();
  ok(model);
});
