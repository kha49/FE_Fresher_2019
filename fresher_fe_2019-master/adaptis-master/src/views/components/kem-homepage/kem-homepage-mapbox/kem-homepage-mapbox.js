const Mapbox = {
    viewMap: () => {
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        mapboxgl.accessToken = 'pk.eyJ1IjoiaHVlbWluIiwiYSI6ImNrMDQwaWk0ZDBmdjEzbnBucjUzNnU0d2IifQ.wbCztcHVJSRW-lCm2ftmKQ';
        var map = new mapboxgl.Map({
            container: 'kemHomeMapbox',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.416,29.257],
            zoom: 2.1   
        });
        map.scrollZoom.disable();
        map.addControl(new mapboxgl.FullscreenControl());
    }
}
export default Mapbox;