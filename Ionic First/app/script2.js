
const user=document.querySelector("#input-user")
const com=document.querySelector("#input-comentario")
const add= document.getElementById("btn-add");


const lista = document.querySelector("#list");
add.addEventListener('click', () =>{
    const useringresado = user.value;
    const comentarioIngresado = com.value;
    
    
    if (useringresado.trim().length <=0 || comentarioIngresado.trim ().length <=0 )
    {
        return console.log("Por favor ingrese los datos");
    }
    const nuevoCom = document.createElement("ion-item");
   nuevoCom.textContent = useringresado +": " + comentarioIngresado;
    lista.appendChild(nuevoCom);
    
    console.log(useringresado, comentarioIngresado);
    });