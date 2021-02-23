var odliczanie = new Date("dec 24, 2020 17:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = odliczanie - now;

  var dni = Math.floor(distance / (1000 * 60 * 60 * 24));
  var godz = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sekundy = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("zegar").innerHTML = dni + "d " + godz + "godz "
  + min + "min " + sekundy + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
