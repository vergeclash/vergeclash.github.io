var styleArray = [
  {
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [
  {
  "color": "#297bff"
  }
  ]
  },
  {
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [
  {
  "color": "#d2e9ff"
  }
  ]
  },
  {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [
  {
  "visibility": "off"
  }
  ]
  },
  {
  "featureType": "road",
  "elementType": "all",
  "stylers": [
  {
  "saturation": -100
  },
  {
  "lightness": 45
  }
  ]
  },
  {
  "featureType": "road.highway",
  "elementType": "all",
  "stylers": [
  {
  "visibility": "simplified"
  }
  ]
  },
  {
  "featureType": "road.arterial",
  "elementType": "labels.icon",
  "stylers": [
  {
  "visibility": "off"
  }
  ]
  },
  {
  "featureType": "transit",
  "elementType": "all",
  "stylers": [
  {
  "visibility": "off"
  }
  ]
  },
  {
  "featureType": "water",
  "elementType": "all",
  "stylers": [
  {
  "color": "#b8dcff"
  },
  {
  "visibility": "on"
  }
  ]}]

  var mapOptions = {
    center: new google.maps.LatLng(40.7590615, -73.969231),
    zoom: 12,
    styles: styleArray,
    scrollwheel: true,
    backgroundColor: 'transparent',
      mapTypeControl: true,          
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementsByClassName("maps")[0],
    mapOptions);        
  var myLatlng = new google.maps.LatLng(40.7590615, -73.969231);
  var focusplace = {lat: 40.7590615 , lng: -73.969231 };      
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      // icon: {
      //     url: "./assets/images/footer/01.png"
      // }
  })