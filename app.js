//variables iniciales
let arregloDeAmigos = []; //arreglo donde se almacenaran los nombres de mis amigos.


//cracion de la funcion agregar un amigo 
function agragarUnAmigo(){

   let nombre = document.getElementById("amigo").value;//obtengo le valor de la caja de texto
   if(nombre != ''){ //si nombre no es '' entonces 
        arregloDeAmigos.push(nombre);//agrego el nombre a el arreglo 
        document.getElementById('amigo').value = '';//limpio la caja de texto
        //console.log(arregloDeAmigos); //imprime los nombres por consola
   }else{
        alert('Ingrese un nombre valido');
   }

}

console.log(`La lista de amigos es ${arregloDeAmigos}`);

