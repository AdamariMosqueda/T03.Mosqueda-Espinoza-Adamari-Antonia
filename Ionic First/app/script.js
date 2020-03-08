const nombre=document.querySelector("#input-caricatura");
const agregar= document.getElementById("btn-agregar");

const lista = document.querySelector("#list");

agregar.addEventListener('click', () =>{
    const nombreIngresado = nombre.value;
    
    
    if (nombreIngresado.trim().length <=0 )
    {
        return console.log("faltan datos");
    }
    const nuevaCar = document.createElement("ion-item");
   nuevaCar.textContent = nombreIngresado;
    lista.appendChild(nuevaCar);
    
    console.log(nombreIngresado);
    });

 