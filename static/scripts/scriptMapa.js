var map = L.map('map').setView([-23.98492079160633, -46.294452368663016], 30); // Define as coordenadas iniciais e o nível de zoom

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);
  var marker = L.marker([-23.98492079160633, -46.294452368663016]);
  marker.addTo(map);
