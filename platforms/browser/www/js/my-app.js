// Initialize app
var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    $$("#btn-tomar").on("click",tomarFoto);
});

function tomarFoto(){
  console.log("click en btn tomar foto");
  navigator.camera.getPicture(hayFoto,noHayFoto,opciones);
}

function hayFoto(foto){
  console.log(foto);
  $$("#foto").attr("src",foto);
}

function noHayFoto(error){
  console.log(error);
}

var opciones={
  correctOrientation: true,
  sourceType: 1,
  quality: 60,
  allowEdit: true,
};