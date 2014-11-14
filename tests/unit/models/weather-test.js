import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('weather', 'Weather', {
  needs: ['model:snotel-station']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
