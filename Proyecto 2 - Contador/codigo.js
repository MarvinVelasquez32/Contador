let contador = 0;

const valor = document.querySelector('#numero');

document.getElementById("disminuir").addEventListener("click",e=>{
	contador--;
	valor.textContent = contador;
	
	if (contador < 0)  {document.getElementById("numero").style.color = "red";} 
	else if (contador == 0) {document.getElementById("numero").style.color = "blue";}
	else if (contador > 0){document.getElementById("numero").style.color = "green";}
	
})

document.getElementById("reiniciar").addEventListener("click",e=>{
	contador = 0;
	valor.textContent = contador;
	if (contador < 0)  {document.getElementById("numero").style.color = "red";} 
	else if (contador == 0) {document.getElementById("numero").style.color = "blue";}
	else if (contador > 0){document.getElementById("numero").style.color = "green";}
})

document.getElementById("incrementar").addEventListener("click",e=>{
	contador++;
	valor.textContent = contador;
	if (contador < 0)  {document.getElementById("numero").style.color = "red";} 
	else if (contador == 0) {document.getElementById("numero").style.color = "blue";}
	else if (contador > 0){document.getElementById("numero").style.color = "green";}
})
 