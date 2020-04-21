export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYS1zLWthcmF2YWkiLCJhIjoiY2s5N2JmMW95MDAzYTNkcjBsOG9hNTU2bSJ9.MyZrjoBkCMvwM23TErbSxA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/a-s-karavai/ck97by16w2ott1ilashio1rui',
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
