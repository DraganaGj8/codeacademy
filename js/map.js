
function initMap() {

    var charm = {lat: 42.0032189, lng: 21.399570555555556};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 21, center: charm});

    var marker = new google.maps.Marker({position: charm, map: map});
  }