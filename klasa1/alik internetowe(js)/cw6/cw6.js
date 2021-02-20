window.onload = start;
let secret = Math.floor(Math.random()*100+1);
let runda = 0;
function start(){
	document.querySelector("#liczba").onkeyup = enter;
	document.querySelector("#sprawdz").onclick = sprawdz;
}

function enter(){
	if(event.keyCode === 13){
		event.preventDefault();
		document.querySelector("#sprawdz").click();
	}
}

function sprawdz(){
	runda++;
	let liczba = parseInt(document.querySelector("#liczba").value);
	
	if(isNaN(liczba)){
		document.querySelector("#wynik").innerHTML += `<span class="error">
		Poproszę liczbę</span><br>`
					return;
	}
	
	if(liczba===secret){
		document.querySelector("#wynik").innerHTML += `<span class= "success">;
		Zgadłeś: ${liczba}.  prób: ${runda}</span><br>`;
		return;
	}
	
	if(liczba<secret){
		document.querySelector("#wynik").innerHTML += `<span class= "less">;
		Za mała liczba: ${liczba}.  prób: ${runda}</span><br>`;
		return;
	}
	
	if(liczba>secret){
		document.querySelector("#wynik").innerHTML += `<span class= "more">;
		Za duża liczba: ${liczba}.  prób: ${runda}</span><br>`;
		return;
	}
}
