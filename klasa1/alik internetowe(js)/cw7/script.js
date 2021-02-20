
document.getElementById("sprawdz").onclick = function() {pa()};
function pa(){
	var x = Number(document.formularz.liczba.value);
	if(x==0){
		document.getElementById("wynik").innerHTML = "podaj liczbę!!!";
	}
	else if(x%2){
		document.getElementById("wynik").innerHTML = "liczba nalerzy do liczb NIEparzystych";
	}else{
		document.getElementById("wynik").innerHTML = "liczba nalerzy do liczb parzystych";
	}
}

document.getElementById("pierwsza").onclick = function() {pi()};
function pi(){
	var x = Number(document.formularz.liczba.value);
	if(x==1){
		document.getElementById("wynik").innerHTML = "liczba nie jest pierwsza";
			return;
	}
	if(x==2){
		document.getElementById("wynik").innerHTML = "liczba jest pierwsza";
			return;
	}
	for(var d=2;d<x;d++){
		if(x%d==0){
            document.getElementById("wynik").innerHTML = "liczba nie jest pierwsza";
			return;
		}
		document.getElementById("wynik").innerHTML = "liczba jest pierwsza";
		return;
	}
}
