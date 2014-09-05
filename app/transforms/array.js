import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (Ember.isArray(serialized)) {
      return Em.A(serialized);
    } else {
      return Em.A();
    }
  },

  serialize: function(deserialized) {
    if (Ember.isArray(deserialized)) {
      return Em.A(deserialized);
    } else {
      return Em.A();
    }
  }
});
