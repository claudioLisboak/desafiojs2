const imagen = document.querySelector("img")
let datos = window.getComputedStyle(imagen)

function Border(){
    let borderSize = datos.getPropertyValue("border-width")

    if(borderSize == "0px"){
        imagen.style.border = "2px solid red"
    }else{
        imagen.style.border = "0px"
    }
}

let mensaje = document.querySelector("#mensaje")




function comprobar(){
    let valor1 = +document.querySelector("#sera").value
    let valor2 = +document.querySelector("#ahri").value
    let valor3 = +document.querySelector("#gwen").value
    let total = valor1 + valor2 + valor3
    console.log(total)
    if(total>10){

        mensaje.innerHTML="llevas demasiados stickers"
        }
        else{
            mensaje.innerHTML= "levas " + total + " stickers"
        }

}
let mensaje2= document.querySelector("#clave")
function clave(){
    
    let dig1 = document.querySelector("#dig1").value
    let dig2 = document.querySelector("#dig2").value
    let dig3 = document.querySelector("#dig3").value
    let pass = dig1+dig2+dig3
    if(pass=="911"){
        mensaje2.innerHTML="clave 1 correcta"
    }else if(pass=="714"){
        mensaje2.innerHTML="clave 2 correcta"
    }else{
        mensaje2.innerHTML="clave incorrecta"
    }
}


        
    


