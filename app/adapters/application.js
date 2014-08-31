import DS from "ember-data";

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: 'http://lit-hollows-1671.herokuapp.com',

  buildURL: function() {
    var base;
    base = this._super.apply(this, arguments);
    return "" + base + ".json";
  }
});

export default ApplicationAdapter;
