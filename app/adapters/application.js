import DS from "ember-data";

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: 'http://api.firstchair.io',

  buildURL: function() {
    var base;
    base = this._super.apply(this, arguments);
    return "" + base + ".json";
  }
});

export default ApplicationAdapter;
