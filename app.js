let listaDeAmigos = []; 

function agregarAmigo() { 
  let nombre = document.getElementById("amigo").value;
  if (nombre ==="") {
    alert(`Por favor, inserte un nombre`);
    return;
  }
  listaDeAmigos[listaDeAmigos.length] = nombre; 
  document.getElementById("amigo").value = ""; 

  let mostrarLista = ""; 
  for(let i=0; i< listaDeAmigos.length; i++){ 
    mostrarLista = mostrarLista + "<li>" + listaDeAmigos[i] + "<li>"; 
}
document.getElementById("listaAmigos").innerHTML = mostrarLista; 
document.getElementById("resultado").innerHTML = "";
}
function sortearAmigo(){ 
  if(listaDeAmigos.length=== 0){ 
    alert(`Por favor, Agregue al menos un nombre`); 
    return;
  }
  let valorAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let nombreSorteado = listaDeAmigos[valorAleatorio]; 
  document.getElementById("resultado").innerHTML = `<li>${nombreSorteado}</li>`;
  listaDeAmigos = [];
  document.getElementById("amigo").value = ""; 
  }