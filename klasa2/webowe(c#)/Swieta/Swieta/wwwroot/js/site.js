// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

    // data do której odliczać
var countDownDate = new Date("Dec 24, 2021 17:00:00").getTime();

    // odświerzanie co sekundę 
var x = setInterval(function() {

  // Dzisiejsza data i godzina
  var now = new Date().getTime();

  // różnica 2 dat do świąt 1
  var distance = countDownDate - now;

  // przelicznik z milisekund na inne
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Wyjście z programu
  document.getElementById("licznik").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // walidacja
  if (distance < 0) {
        clearInterval(x);
    document.getElementById("licznik").innerHTML = "To wydarzenie już się odbyło";
  }
}, 1000);


