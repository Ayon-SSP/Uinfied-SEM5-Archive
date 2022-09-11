var geoLoc = navigator.geolocation;
// global variables

function setup() {
    if (geoLoc) {
        geoLoc.getCurrentPosition(function(position) {
            var tv = document.getElementById("textv");
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            tv.innerHTML = ("latitude ="+latitude+ " Longitude ="+ longitude);
        });
    }
}
