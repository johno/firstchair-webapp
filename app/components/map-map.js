import Ember from 'ember';

var Mapbox = {
  config: {
    api_key: 'johno.jgpi0hee',
    center: [45.35, -111.051],
    zoom: 5
  },
  map: null
};

export default Mapbox;

// From ember-cli-mapbox
export default Ember.Component.extend({
  didInsertElement: function() {
    this._super();
    L.mapbox.accessToken = 'pk.eyJ1Ijoiam9obm8iLCJhIjoiTWxzWjJ0YyJ9.jEhkyvO03YgvQEqIOxZJNQ';
    Mapbox.map = L.mapbox.map('map', Mapbox.config.api_key).setView(Mapbox.config.center, Mapbox.config.zoom);
    this.drawMarkers();
  },

  drawMarkers: function() {
    if (typeof(Mapbox.map) !== 'undefined') {
      // Remove old markers, skip index 0 as that is the actual map tiles.
      var layerIndex = 0;
      Mapbox.map.eachLayer(function(layer) {
        if (layerIndex === 0) {
          layerIndex++;
          return;
        }
        Mapbox.map.removeLayer(layer);
        layerIndex++;
      }); 

      this.get('markers').forEach(function(item) {
        L.marker([item.get('latitude'), item.get('longitude')], {
          icon: L.mapbox.marker.icon({
            'marker-size': 'large',
            'marker-symbol': 'skiing',
            'marker-color': '#ccc'
          })
        }).addTo(Mapbox.map);
      }); 
    }
  }.observes('markers'),
});
