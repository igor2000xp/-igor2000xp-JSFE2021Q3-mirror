mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcjIwMDB4cCIsImEiOiJja3Vuem5qaDQwZHRzMnZxcmpmM3oxZTkxIn0.oOzqtXR2nTtSTASmnZqQTQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [2.3364, 48.86091],
  zoom: 15.75,
  showZoom: true,
});
map.addControl(new mapboxgl.NavigationControl());
const marker1 = new mapboxgl.Marker({
    color: 'black',
  })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);
const marker2 = new mapboxgl.Marker({
    color: '#757575',
  })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);
const marker3 = new mapboxgl.Marker({
    color: '#757575',
  })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);
const marker4 = new mapboxgl.Marker({
    color: '#757575',
  })
  .setLngLat([2.3330, 48.8619])
  .addTo(map);
const marker5 = new mapboxgl.Marker({
    color: '#757575',
  })
