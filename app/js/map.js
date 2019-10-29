

var map = L.map('mymap', {
  scrollWheelZoom: false
}).setView([55.831046, 37.982695], 10);




var gl = L.mapboxGL({
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  accessToken: 'not-needed',
  style: 'https://api.maptiler.com/maps/6c167207-9c06-4153-8c96-569f4cdcce8b/style.json?key=usHRrYRw1klTBIER5cCF'
}).addTo(map);


var myIcon = L.icon({
    iconUrl: '../img/location-pin.png',
    iconSize: [28, 42],
    popupAnchor: [-3, -76]
});

L.marker([55.831046, 37.982695], {icon: myIcon}).addTo(map);    

(function () {
  if(window.innerWidth < 920) {
    map.dragging.disable();
    map.zoomControl.remove();
  }
}());