/*
GEOLOCALIZACION

Se realiza a través del objeto navigator.

Ejemplo para revisar si existe el objeto navigator

    if(navigator){
        console.log("su navegador soporta el objeto navigator")
    } else {
        console.log("su navegador no soporta el objeto navigator")
    }

El objeto navigator tiene el objeto geolocation.

    navigator.geolocation

El objeto geolocation tiene tres métodos:

    .getCurrentPosition()       // posicion actual
    .watchPosition()            // seguir la posicion
    .clearWatch()               // detener el .watchPosition()

El método getCurrentPosition() recibe dos parámetros. El primero en caso de éxito, y el segundo en caso de error
    
    navigator.geolocation.getCurrentPosition(exito,error);

    function exito() {
        //
    }

    function error() {
       // 
    }
*/

var button = document.getElementById('button');

button.addEventListener('click', obtenerPosicion);

function obtenerPosicion(){
    navigator
        .geolocation
        .getCurrentPosition(mostrarPosicion);
}

function mostrarPosicion(position){
    var lati = position.coords.latitude;
    var longi = position.coords.longitude;
    var element = document.getElementById('mapa');

    // Un mapa de Google requiere dos parámetros:
    // 1. El elemento HTML en el cual se dibujará
    // 2. Las opciones, que es un objeto que requiere
    // dos propiedades obligatorias:
    // center:
    // zoom: 

    var options = {
        // Center es un objeto con latitude y longitute
        center: {
            lat: lati,
            lng: longi
        },
        // El zoom de Google Maps va de 1 a 20
        zoom: 16,
        scrollwheel: true,
        mapTypeId: google.maps.MapTypeId.SATELLITE // (ROADMAP)
    }
    var map = new google.maps.Map(element,options);
    var marker = new google.maps.Marker({
        position: options.center,
        map: map,
        title: 'Tu estas aqui'
    });
};