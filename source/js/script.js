var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// Интерактивная карта

function initMap() {
  var element = document.getElementById("interactive-map");
  var options = {
    zoom: 17,
    center: {lat: 59.9389129, lng: 30.3233088} 
  };

  var myMap = new google.maps.Map(element, options);
  
   myMap.panBy(0, -20);
   
  var image = "img/icon-map-marker.svg";

  var marker = new google.maps.Marker ({
    position: {lat: 59.9389129, lng: 30.3233088},
    map: myMap,
    icon: image
  });  
}
