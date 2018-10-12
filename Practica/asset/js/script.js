/*Usando "document.getElementById"*/ 
var container; 

container = document.getElementById('c1'); 

container.innerText="¡Hola Mundo!"; 

container.style.backgroundColor= "#000000"; 

container.style.color="#1cb723"; 

container.style.width= "200px"; 

container.style.height="200px"; 

container.innerHTML="<input type=”text” placeholder=’escriba su texto’>";

/*Usando "document.getElementsByClassName"*/

var containers= document.getElementsByClassName('container c2');

for (let i=0; i<containers.length; i++){
    containers[i].style.backgroundColor="#009999";
    containers[i].innerHTML= "<input type='text' placeholder='Escriba su texto'>"; 
}

/*Eventos*/

var boton= document.getElementById('btn-click');

boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
} 
 
var btnCopy= document.getElementById('btnCopy'); 

btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}
