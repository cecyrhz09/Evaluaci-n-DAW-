var nombre = document.getElementById('icon_prefix');
var ape = document.getElementById("ape")
var telefono = document.getElementById('icon_telephone');
var coment = document.getElementById('coment');
var email = document.getElementById('email');
var error = document.getElementById('error');

error.style.color = 'blue'
error.style.font ="Tw Cent"

function enviarFormulario(){
    console.log('Enviar formulario...');
     var mensajesError=[];

     if (nombre.value == null || nombre.value ==''){
        mensajesError.push('Ingresa nombre...!');
    }else if (nombre.value.length > 10){
        mensajesError.push('El nombre no debe exceder 10 caracteres.')
    }

    if (ape.value ==null || ape.value ==''){
        mensajesError.push('Ingresa Apellido..!');
    }else if(ape.value.length <8){
         //Debe ser de 8 caracteres o mayor
         mensajesError.push('Debe contener al menos 8 caracteres');
    }
     
    if(tiene_numeros(telefono.value)==0){
        mensajesError.push('Solo se admiten números');
    }

    if(email.value ==null || email.value ==''){
         mensajesError.push('Escribir Email');
    }else  if (validarEmail(email.value)==0){
         mensajesError.push('El email no es valido')
    }

    error.innerHTML = mensajesError.join(' , ');
    return false;
}

//Devuelve 0 si no se encuenta 1 si se encuentra
var numeros="0123456789";
function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
}

//Devuelve 0 si no contiene letra
 var letras="abcdefghyjklmnñopqrstuvwxyz";

function tiene_letras(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

function tiene_mayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

//Validar Email
function validarEmail(texto){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)){
     return 1;
    }else {
     return 0;
    } 
}

