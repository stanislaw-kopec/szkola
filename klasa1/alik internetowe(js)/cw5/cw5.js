window.onload = start;

function start() {
  const div1 = document.querySelector("#pierwszy");
  document.querySelector("#drugi").onclick = klik2;
  console.log(div1);
  div1.onclick = klik;
  document.querySelector("#trzeci").addEventListener("click", klik3);
}

function klik2(){
  if(this.style.background != "red"){
    this.style.background = "red";
  }
  else{
    this.style.background = "white";
  }
}

function klik3(){
  if(this.style.color != "red"){
    this.style.color= "red";
  }
  else{
    this.style.color = "black";
  }
}
function klik(){
  console.log("klikniento");
  alert("klikniento");
}
