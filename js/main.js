/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



var elem = document.querySelector('.fixed-action-btn');
var instance = M.FloatingActionButton.init(elem, {
  direction: 'left'
});

// add Toolbar class -> pas d'effet sur bouton?
/* var elem = document.querySelector('.fixed-action-btn');
var instance = new M.FloatingActionButton(elem, {
  toolbarEnabled: true
});*/

// Initialisation du Carousel //
var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem, options);
