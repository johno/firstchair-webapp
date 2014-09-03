import { climacon } from 'firstchair/helpers/climacon';

module('ClimaconHelper');

test('it has the correct classes', function() {
  var result = climacon('sun');
  ok(result.toString().indexOf('climacon sun') > 0);
});

test('it has the correct tag', function() {
  var result = climacon('sun');
  console.log(result);
  ok(result.toString().indexOf('<i') >= 0);
});
