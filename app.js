//variables iniciales
let arregloDeAmigos = []; //arreglo donde se almacenaran los nombres de mis amigos.


//cracion de la funcion agregar un amigo 
function agragarUnAmigo(){

   let nombre = document.getElementById("amigo").value;//obtengo le valor de la caja de texto
   if(nombre != ''){ //si nombre no es '' entonces 
        arregloDeAmigos.push(nombre);//agrego el nombre a el arreglo 
        document.getElementById('amigo').value = '';//limpio la caja de texto
        //console.log(arregloDeAmigos); //imprime los nombres por consola
        listarAmigos();
   }else{
        alert('Ingrese un nombre valido');
   }

}

 //se obtiene el amigo secreto con un numero aleatorio
function sorteoDeAmigo(){

     if(arregloDeAmigos.length ==  0){
          alert('Ingresa un amigo...');
          return;//termina la funcion.
     }else{

          let numeroAleatorio = Math.floor(Math.random() * arregloDeAmigos.length);//el numero se calcula con el tamañano del arreglo, en este caso seria la cantidad de amigos introducido y el numero va de cero a arregleDeAmigos.length
          let amigoSecreto = arregloDeAmigos[numeroAleatorio];
     
          let resusltado = document.getElementById('resultado');
          resusltado.innerHTML = '';
          let rec = document.createElement('rec');
          rec.textContent = `Tu amigo secreto es ${amigoSecreto}`//se asigna el amigo secreto
          resusltado.appendChild(rec);
          
          //limpiamos la lista 
          let lista = document.getElementById('listaAmigos');
          lista.innerHTML = '';//limpiamos la pantalla para que solo se muetre el amigo secreto.
     }
}


// Función para listar los amigos en la página
function listarAmigos() {

     let lista = document.getElementById('listaAmigos');
     lista.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos nombres
 
     // Recorrer el arreglo de amigos y agregar cada uno a la lista
     for (let i = 0; i < arregloDeAmigos.length; i++) {
         let li = document.createElement('li'); 
         li.textContent = arregloDeAmigos[i];//se agregan los amigos para su imprecion
         lista.appendChild(li); 
     }
 }


