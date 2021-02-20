window.onload = function (){//funkcja anonimowa
	let t1 = [12,56,"trzeci",[23,544,true],23,22];
	console.log(t1);
	//alert(t1);
	document.querySelector("#t1").innerHTML = t1+"<br>";
	t1[1] = "fajna liczba tu była";//zamienia 544
	document.querySelector("#t1").innerHTML += t1+"<br>";
	//t1[10] = "uppss";
	//document.querySelector("#t1").innerHTML += t1+"<br>";
	t1.push("pushony nowy");
	document.querySelector("#t1").innerHTML += t1+"<br>";
	t1.unshift("na początek");
	document.querySelector("#t1").innerHTML += t1+"<br>";
	let elem = t1.pop();//z końca zniknie
	document.querySelector("#t1").innerHTML += t1+"<br>";
	t1.shift();//z początku znikinie
	document.querySelector("#t1").innerHTML += t1+"<br>";
	let html = "<ol>";
	for(let i=0;i<t1.length;i++){
			html += "<li>"+t1[i]+"</li>";
	}
	html += "<ol>";
	document.querySelector("#t2").innerHTML = toList(t1);
	};
function toList(dane){
	let html = "<ol>";
	for (let i=0;i<dane.length;i++){
			html += "<li>"+dane[i]+"</li>";
	}
	html += "</ol>";
	return html;
}