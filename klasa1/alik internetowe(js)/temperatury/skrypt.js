function k(){
  var c = Number(document.formularz.liczba.value);
  if(c >= -273.15){
    var suma = c + 273.15;
  }
  else{
    alert("Kelwiny zaczynają się od: -273.15");
  }
  document.getElementById("wynik").innerHTML = suma+"K";
}
function f(){
  var c = Number(document.formularz.liczba.value);
  if(c >= -273.15){
    var suma = (c*1.8) + 32;
  }
  document.getElementById("wynik").innerHTML = suma+"<sup>o</sup>F";
}
function r(){
  var c = Number(document.formularz.liczba.value);
  if(c >= -273.15){
    var suma = (9/5)*(c + 273.15);
  }
  document.getElementById("wynik").innerHTML = suma+"<sup>o</sup>R";
}
