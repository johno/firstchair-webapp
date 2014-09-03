import Ember from 'ember';

function climacon(iconClass) {
  return new Ember.Handlebars.SafeString('<i class="climacon ' + iconClass + '"></i>');
}

export { climacon };

export default Ember.Handlebars.makeBoundHelper(climacon);
