const armarTorneo = document.getElementById('armar-torneo');
const inicio = document.getElementById('inicio');
const modalidadTorneo = document.getElementById('modalidad-torneo')

function modalidadTorneo1 () {
    inicio.classList.add('ocultar'); //oculto la seccion inicio
    modalidadTorneo.classList.remove('ocultar'); //agrego la seccion torneo, parte de cant-jugadores, eliminando la clase .ocultar que esta ocultando a la seccion
}

armarTorneo.addEventListener('click', modalidadTorneo1)

const sexto = document.getElementById('sexto');
const cuarto = document.getElementById('cuarto');

const torneoOk = document.getElementById('cant-jugadores');
const cantJugadores = document.getElementById('input-cant-jugadores'); //para acceder a la cantidad de jugadores ingresado
const aceptarCantidad = document.getElementById('aceptar-cantidad');
const formularioJugadores = document.getElementById('nombres');
const listaJugadores = document.getElementById ('lista-jugadores');
const confirmarJugadores = document.getElementById('confirmar-jugadores');
const formularioEquipos = document.getElementById('equipos');
const listaEquipos = document.getElementById('lista-equipos');
const aEmpezar = document.getElementById('confirmar-equipos');
const formularioPartidos = document.getElementById('partidos');
const listasPartidos = document.getElementById('listas-partidos');
const partidosFinalizados = document.getElementById('partidos-finalizados');


//crear torneo de parejas de a 2 
function torneoCuarto (){
    modalidadTorneo.classList.add('ocultar');
    torneoOk.classList.remove('ocultar');
    
    const nombresJugadores = [];
    const equiposArray = [];

    function ingresarJugadores () {
        const cantJugadoresInt = parseInt(cantJugadores.value); //transformo la cantidad ingresada de string a entero
        nombresJugadores.length = 0;
        equiposArray.length = 0;
        listaJugadores.innerHTML = "";
        if (cantJugadoresInt % 2 !=0){
            alert("Ingrese numero multiplo de 2");
        } else {
            nombres.classList.remove('ocultar'); //se elimina la class .oculto del id nombres para mostrar la seccion
            torneoOk.classList.add('ocultar');
            
            for (let i = 0;i < cantJugadoresInt; i++) {
                const nuevoJugadorLi = document.createElement('li'); //creo una linea de la lista
                const nuevoJugadorInput = document.createElement('input'); //creo un elemento input para que agreguen el nombre del jugador
                nuevoJugadorInput.type = 'text'; // le doy el atributo de tipo text
                nuevoJugadorInput.placeholder  = `Jugador ${i+1}`;
                nuevoJugadorInput.classList.add('input-jugador'); // a cada jugador le agrego la clase 'input-jugador'
                nuevoJugadorLi.appendChild(nuevoJugadorInput); // meto el input dentro de una linea de la lista
                listaJugadores.appendChild(nuevoJugadorLi); //agrego la linea a la lista de jugadores
            }
        }
    }

    aceptarCantidad.addEventListener('click', ingresarJugadores); // agrego el evento donde al ciclear en aceptar cantidad acciona la funcion ingresarJugadores

    function armandoEquipos () {
        const cantJugadoresInt2 = parseInt(cantJugadores.value);
        const totalEquipos = cantJugadoresInt2 / 2;

        // tomar todos los inputs con la clase 'input-jugador
        const inputs = document.querySelectorAll('.input-jugador') //creo un array 'inputs', donde guardo los inputs de clase '.input-jugador'
        nombresJugadores.length = 0;
        inputs.forEach(function(input) { //forEach recorre todos los elementos que estan en inputs
            const nombre = input.value.trim(); //input.value obtiene lo que el usuario guardo en el campo, y trim le quita los espacio en blanco al final y al prncipio, todo esto lo guardo en la const nombre
            if (nombre !== "") {
                nombresJugadores.push(nombre); // le agrego el elemento nombre al array
            }
        });

        function mezclar (array){
            for (let i = array.length-1;i>0;i--){
                const j = Math.floor(Math.random()*(i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
        
        mezclar(nombresJugadores);

        formularioEquipos.classList.remove('ocultar');
        nombres.classList.add('ocultar');

        listaEquipos.innerHTML = "";

        let  j = 0;
        for (let i = 0; i < totalEquipos; i++) {
            
            const equiposLi = document.createElement('li')
            equiposLi.textContent = `Equipo ${i+1}:`+' '+nombresJugadores[j]+','+' '+nombresJugadores[j+1];
            listaEquipos.appendChild(equiposLi);
            equiposArray.push([nombresJugadores[j], nombresJugadores[j+1]])
            j = j + 2
        }
        mezclar(equiposArray);
    }

    confirmarJugadores.addEventListener('click', armandoEquipos);
    
    function armandoPartidos () {
        partidos.classList.remove('ocultar');
        formularioEquipos.classList.add('ocultar');
        listasPartidos.innerHTML = "";
        
        if (equiposArray.length % 2 == 0){
            let k = 0;
            let l = 1;
            for(let i = 0;  i < equiposArray.length / 2; i++) {
                const nuevoPartido = document.createElement('li');
                nuevoPartido.textContent =  "Partido "+l+": "+"("+equiposArray[k]+")"+" vs "+"("+equiposArray[k+1]+")";
                k = k + 2;
                l = l + 1;
                listasPartidos.appendChild(nuevoPartido);
            }
        } else if (equiposArray.length / 3 == 1) {
            const nuevoPartido = document.createElement('li');
            const nuevoPartido2 = document.createElement('li');
            const nuevoPartido3 = document.createElement('li');
            nuevoPartido.textContent =  "Partido "+1+": "+"("+equiposArray[0]+")"+" vs "+"("+equiposArray[1]+")";
            nuevoPartido2.textContent = "Partido "+2+": "+"("+equiposArray[0]+")"+" vs "+"("+equiposArray[2]+")";
            nuevoPartido3.textContent = "Partido "+3+": "+"("+equiposArray[1]+")"+" vs "+"("+equiposArray[2]+")";
            listasPartidos.appendChild(nuevoPartido);
            listasPartidos.appendChild(nuevoPartido2);
            listasPartidos.appendChild(nuevoPartido3);
        } else {
            let k = 0;
            let l = 1;
            for(let i = 0;  i < (equiposArray.length - 1) / 2; i++) {
                const nuevoPartido = document.createElement('li');
                nuevoPartido.textContent =  "Partido "+l+": "+"("+equiposArray[k]+")"+" vs "+"("+equiposArray[k+1]+")";
                k = k + 2;
                l = l + 1;
                listasPartidos.appendChild(nuevoPartido);
            }
            const sombrerito = document.createElement('li');
            sombrerito.textContent = "Equipo sombrerito:"+"("+equiposArray[equiposArray.length-1]+")";
            listasPartidos.appendChild(sombrerito);
        }



    }
    
    aEmpezar.addEventListener('click', armandoPartidos);

    function volverInicio () {
        partidos.classList.add('ocultar');
        inicio.classList.remove('ocultar');
    }
    
    partidosFinalizados.addEventListener('click', volverInicio);

}


//crear torneo de parejas de a 3
function torneoSexto (){
    modalidadTorneo.classList.add('ocultar');
    torneoOk.classList.remove('ocultar');
    
    const nombresJugadores = [];

    const equiposArray = [];

    function ingresarJugadores () {
        const cantJugadoresInt = parseInt(cantJugadores.value); //transformo la cantidad ingresada de string a entero
        nombresJugadores.length = 0;
        equiposArray.length = 0;
        listaJugadores.innerHTML = "";
        if (cantJugadoresInt % 3 !=0){
            alert("Ingrese numero multiplo de 3");
        } else {
            nombres.classList.remove('ocultar'); //se elimina la class .oculto del id nombres para mostrar la seccion
            torneoOk.classList.add('ocultar');
            
            for (let i = 0;i < cantJugadoresInt; i++) {
                const nuevoJugadorLi = document.createElement('li'); //creo una linea de la lista
                const nuevoJugadorInput = document.createElement('input'); //creo un elemento input para que agreguen el nombre del jugador
                nuevoJugadorInput.type = 'text'; // le doy el atributo de tipo text
                nuevoJugadorInput.placeholder  = `Jugador ${i+1}`;
                nuevoJugadorInput.classList.add('input-jugador'); // a cada jugador le agrego la clase 'input-jugador'
                nuevoJugadorLi.appendChild(nuevoJugadorInput); // meto el input dentro de una linea de la lista
                listaJugadores.appendChild(nuevoJugadorLi); //agrego la linea a la lista de jugadores
            }

        }
    }

    aceptarCantidad.addEventListener('click', ingresarJugadores); // agrego el evento donde al ciclear en aceptar cantidad acciona la funcion ingresarJugadores

    function armandoEquipos () {
        const cantJugadoresInt2 = parseInt(cantJugadores.value);
        const totalEquipos = cantJugadoresInt2 / 3;

        // tomar todos los inputs con la clase 'input-jugador
        const inputs = document.querySelectorAll('.input-jugador') //creo un array 'inputs', donde guardo los inputs de clase '.input-jugador'
        nombresJugadores.length = 0;
        inputs.forEach(function(input) { //forEach recorre todos los elementos que estan en inputs
            const nombre = input.value.trim(); //input.value obtiene lo que el usuario guardo en el campo, y trim le quita los espacio en blanco al final y al prncipio, todo esto lo guardo en la const nombre
            if (nombre !== "") {
                nombresJugadores.push(nombre); // le agrego el elemento nombre al array
            }

        });

        function mezclar (array){
            for (let i = array.length-1;i>0;i--){
                const j = Math.floor(Math.random()*(i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
        
        mezclar(nombresJugadores);
        
        formularioEquipos.classList.remove('ocultar');
        nombres.classList.add('ocultar');

        listaEquipos.innerHTML = "";

        let  j = 0;
        for (let i = 0; i < totalEquipos; i++) {
            const equiposLi = document.createElement('li')
            equiposLi.textContent = `Equipo ${i+1}:`+' '+nombresJugadores[j]+','+' '+nombresJugadores[j+1]+','+' '+nombresJugadores[j+2];
            listaEquipos.appendChild(equiposLi);
            equiposArray.push([nombresJugadores[j], nombresJugadores[j+1], nombresJugadores[j+2]])
            j = j + 3;
        }
        mezclar(equiposArray);
    }

    console.log(equiposArray);
    
    confirmarJugadores.addEventListener('click', armandoEquipos);
    
    function armandoPartidos () {
        
        partidos.classList.remove('ocultar');
        formularioEquipos.classList.add('ocultar');
        
        listasPartidos.innerHTML = "";
        if (equiposArray.length % 2 == 0) {
            let k = 0;
            let l = 1;
            for(let i = 0;  i < equiposArray.length / 2; i++) {
                const nuevoPartido = document.createElement('li');
                nuevoPartido.textContent =  "Partido "+l+": "+"("+equiposArray[k]+")"+" vs "+"("+equiposArray[k+1]+")";
                k = k + 2;
                l = l + 1;
                listasPartidos.appendChild(nuevoPartido);
            }
        } else if (equiposArray.length / 3 == 1) {
            const nuevoPartido = document.createElement('li');
            const nuevoPartido2 = document.createElement('li');
            const nuevoPartido3 = document.createElement('li');
            nuevoPartido.textContent =  "Partido "+1+": "+"("+equiposArray[0]+")"+" vs "+"("+equiposArray[1]+")";
            nuevoPartido2.textContent = "Partido "+2+": "+"("+equiposArray[0]+")"+" vs "+"("+equiposArray[2]+")";
            nuevoPartido3.textContent = "Partido "+3+": "+"("+equiposArray[1]+")"+" vs "+"("+equiposArray[2]+")";
            listasPartidos.appendChild(nuevoPartido);
            listasPartidos.appendChild(nuevoPartido2);
            listasPartidos.appendChild(nuevoPartido3);
        } else {
            let k = 0;
            let l = 1;
            for(let i = 0;  i < (equiposArray.length - 1) / 2; i++) {
                const nuevoPartido = document.createElement('li');
                nuevoPartido.textContent =  "Partido "+l+": "+"("+equiposArray[k]+")"+" vs "+"("+equiposArray[k+1]+")";
                k = k + 2;
                l = l + 1;
                listasPartidos.appendChild(nuevoPartido);
            }
            const sombrerito = document.createElement('li');
            sombrerito.textContent = "Equipo sombrerito:"+"("+equiposArray[equiposArray.length-1]+")";
            listasPartidos.appendChild(sombrerito);
        }
    }
    aEmpezar.addEventListener('click', armandoPartidos);

    function volverInicio () {
        partidos.classList.add('ocultar');
        inicio.classList.remove('ocultar');
    }

    partidosFinalizados.addEventListener('click', volverInicio);
}





sexto.addEventListener('click', torneoSexto); // al presionar en el boton sexto ejecuto la funcion torneoSexto

cuarto.addEventListener('click', torneoCuarto);









