const armarTorneoButton = document.getElementById('armar-torneo-button');
const inicio = document.getElementById('inicio');
const modalidadTorneo = document.getElementById('modalidad-torneo');
const eliminarJugadorO = document.getElementById('eliminar-jugador-o');
const eliminarJugador = document.getElementById('eliminar-jugador');
const ruletaEliminar = document.getElementById('ruleta-eliminar');
const ruletaEliminados = document.getElementById('ruleta-eliminados');
const empezarArmar = document.getElementById('empezar-armar');
const cantJugadoresInput0 = document.getElementById('input-cant-jugadores0');
const cantEliminar = document.getElementById('input-cant-eliminar');
const confirmarCantidad = document.getElementById('confirmar-cantidad');
const listaJugadores0 = document.getElementById('lista-jugadores0');
const confirmarCantidadRuleta = document.getElementById('confirmar-cantidad-ruleta');
const confirmarJugadoresRuleta = document.getElementById('confirmar-jugadores-ruleta');
const equiposEliminados = document.getElementById('equipos-eliminados');
const listaEquipos0 = document.getElementById('lista-equipos0');
const jugadoresEliminados = document.getElementById('jugadores-eliminados');
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
const comenzarPartidos = document.getElementById('comenzar-partidos');

function comenzarTorneador () {
    inicio.classList.add('ocultar');
    modalidadTorneo.classList.remove('ocultar')
}
armarTorneoButton.addEventListener('click', comenzarTorneador)

//crear torneo de parejas de a 2 
function torneoCuarto (){
    modalidadTorneo.classList.add('ocultar');
    eliminarJugadorO.classList.remove('ocultar');

    function empezarRuleta (){
        eliminarJugadorO.classList.add('ocultar');
        ruletaEliminar.classList.remove('ocultar');
    }
    eliminarJugador.addEventListener('click', empezarRuleta);

    const nombresJugadores0 = [];
    const equiposArray0 = [];

    function inputsRuleta (){
        const cantJugadoresInt0 = parseInt(cantJugadoresInput0.value);
        const cantEliminarInt = parseInt(cantEliminar.value);

        nombresJugadores0.length = 0;
        listaJugadores0.innerHTML = "";

        if ((cantJugadoresInt0 - cantEliminarInt) % 2 != 0) {
            alert("NO conseguiras un numero par de jugadores para armar parejas");
        } else {
            ruletaEliminar.classList.add('ocultar');
            ruletaEliminados.classList.remove('ocultar');

            for(let i = 0; i < cantJugadoresInt0; i++) {
                const nuevoJugadorLi0 = document.createElement ('li');
                const nuevoJugadorInput00 = document.createElement('input');
                nuevoJugadorInput00.type = 'text';
                nuevoJugadorInput00.placeholder = `Jugador ${i+1}`;
                nuevoJugadorInput00.classList.add('input-jugador')
                nuevoJugadorLi0.appendChild(nuevoJugadorInput00);
                listaJugadores0.appendChild(nuevoJugadorLi0);
            }
        }
    }
    confirmarCantidad.addEventListener('click', inputsRuleta);

    function elegirEliminados() {
        listaEquipos0.innerHTML = "";
        jugadoresEliminados.innerHTML = "";
        nombresJugadores0.length = 0;
        equiposArray0.length = 0

        const cantJugadoresInt01 = parseInt(cantJugadoresInput0.value);
        const inputs = document.querySelectorAll('.input-jugador');
        nombresJugadores0.length = 0;
        for (const input of inputs){ //forEach recorre todos los elementos que estan en inputs
            const nombre = input.value.trim(); //input.value obtiene lo que el usuario guardo en el campo, y trim le quita los espacio en blanco al final y al prncipio, todo esto lo guardo en la const nombre
            if (nombre === "") {
                alert("Por favor, complete todos los campos");
                return;
            } else {
                nombresJugadores0.push(nombre);
            }
        };

        function mezclar (array){
            for (let i = array.length-1;i>0;i--){
                const j = Math.floor(Math.random()*(i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
        }

        mezclar(nombresJugadores0);

        let j = 0;
        const cantEliminarInt = parseInt(cantEliminar.value);
        const cantidadEquipos = (cantJugadoresInt01-cantEliminarInt)/2;

        for (let i = 0; i < cantidadEquipos; i++){
            const equiposLi0 = document.createElement('li')
            equiposLi0.textContent = `Equipo ${i+1}:`+' '+nombresJugadores0[j]+','+' '+nombresJugadores0[j+1];
            listaEquipos0.appendChild(equiposLi0);
            equiposArray.push([nombresJugadores0[j], nombresJugadores0[j+1]])
            j = j + 2
        }
        let k = 1;
        for (let i = nombresJugadores0.length - 1; i >= nombresJugadores0.length-cantEliminarInt; i--) {
            const jugadoresEliminadosLi = document.createElement('li');
            jugadoresEliminadosLi.textContent = `Eliminado/s:`+" "+nombresJugadores0[i];
            jugadoresEliminados.appendChild(jugadoresEliminadosLi);
            k = k + 1;
        }

        ruletaEliminados.classList.add('ocultar');
        equiposEliminados.classList.remove('ocultar');
    }
    confirmarJugadoresRuleta.addEventListener('click', elegirEliminados);

    comenzarPartidos.addEventListener('click', armandoPartidos);

    const nombresJugadores = [];
    const equiposArray = [];

    function empezarTorneo() {
        eliminarJugadorO.classList.add('ocultar');
        torneoOk.classList.remove('ocultar');
    }
    
    empezarArmar.addEventListener('click', empezarTorneo)
    
    function ingresarJugadores () {
        const cantJugadoresInt = parseInt(cantJugadores.value); //transformo la cantidad ingresada de string a entero
        nombresJugadores.length = 0;
        equiposArray.length = 0;
        listaJugadores.innerHTML = "";
        
        if (cantJugadoresInt % 2 !=0 || cantJugadoresInt <=3){
            alert("Ingrese numero multiplo de 2, minimo 4 jugadores");
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
        for (const input of inputs){ //forEach recorre todos los elementos que estan en inputs
            const nombre = input.value.trim(); //input.value obtiene lo que el usuario guardo en el campo, y trim le quita los espacio en blanco al final y al prncipio, todo esto lo guardo en la const nombre
            if (nombre === "") {
                alert("Por favor, complete todos los campos");
                return;
            } else {
                nombresJugadores.push(nombre);
            }
        };

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
            equiposArray.push([nombresJugadores[j], nombresJugadores[j+1], ])
            j = j + 2
        }
        mezclar(equiposArray);
    }

    confirmarJugadores.addEventListener('click', armandoEquipos);
    
    function armandoPartidos () {
        partidos.classList.remove('ocultar');
        formularioEquipos.classList.add('ocultar');
        equiposEliminados.classList.add('ocultar');
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
function torneoSexto() {
    modalidadTorneo.classList.add('ocultar');
    eliminarJugadorO.classList.remove('ocultar');

    function empezarRuleta (){
        eliminarJugadorO.classList.add('ocultar');
        ruletaEliminar.classList.remove('ocultar');
    }
    eliminarJugador.addEventListener('click', empezarRuleta);

    const nombresJugadores0 = [];
    const equiposArray0 = 0;

    function inputsRuleta (){
        const cantJugadoresInt0 = parseInt(cantJugadoresInput0.value);
        const cantEliminarInt = parseInt(cantEliminar.value);

        nombresJugadores0.length = 0;
        listaJugadores0.innerHTML = "";

        if ((cantJugadoresInt0 - cantEliminarInt) % 3 != 0) {
            alert("NO conseguiras armar equipos de 3 jugadores");
        } else {
            ruletaEliminar.classList.add('ocultar');
            ruletaEliminados.classList.remove('ocultar');

            for(let i = 0; i < cantJugadoresInt0; i++) {
                const nuevoJugadorLi0 = document.createElement ('li');
                const nuevoJugadorInput00 = document.createElement('input');
                nuevoJugadorInput00.type = 'text';
                nuevoJugadorInput00.placeholder = `Jugador ${i+1}`;
                nuevoJugadorInput00.classList.add('input-jugador')
                nuevoJugadorLi0.appendChild(nuevoJugadorInput00);
                listaJugadores0.appendChild(nuevoJugadorLi0);
            }
        }
    }
    confirmarCantidad.addEventListener('click', inputsRuleta);

    function elegirEliminados() {
        listaEquipos0.innerHTML = "";
        jugadoresEliminados.innerHTML = "";
        nombresJugadores0.length = 0;
        equiposArray0.length = 0
        
        const cantJugadoresInt01 = parseInt(cantJugadoresInput0.value);
        const inputs = document.querySelectorAll('.input-jugador');
        nombresJugadores0.length = 0;
        for (const input of inputs){ //forEach recorre todos los elementos que estan en inputs
            const nombre = input.value.trim(); //input.value obtiene lo que el usuario guardo en el campo, y trim le quita los espacio en blanco al final y al prncipio, todo esto lo guardo en la const nombre
            if (nombre === "") {
                alert("Por favor, complete todos los campos");
                return;
            } else {
                nombresJugadores0.push(nombre);
            }
        };

        function mezclar (array){
            for (let i = array.length-1;i>0;i--){
                const j = Math.floor(Math.random()*(i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
        }

        mezclar(nombresJugadores0);

        let j = 0;
        const cantEliminarInt = parseInt(cantEliminar.value);
        const cantidadEquipos = (cantJugadoresInt01-cantEliminarInt)/3;

        for (let i = 0; i < cantidadEquipos; i++){
            const equiposLi0 = document.createElement('li')
            equiposLi0.textContent = `Equipo ${i+1}:`+' '+nombresJugadores0[j]+','+','+nombresJugadores0[j+1]+','+nombresJugadores0[j+2];;
            listaEquipos0.appendChild(equiposLi0);
            equiposArray.push([nombresJugadores0[j], nombresJugadores0[j+1]])
            j = j + 3
        }
        let k = 1;
        for (let i = nombresJugadores0.length - 1; i >= nombresJugadores0.length-cantEliminarInt; i--) {
            const jugadoresEliminadosLi = document.createElement('li');
            jugadoresEliminadosLi.textContent = `Eliminado/s:`+" "+nombresJugadores0[i];
            jugadoresEliminados.appendChild(jugadoresEliminadosLi);
            k = k + 1;
        }

        ruletaEliminados.classList.add('ocultar');
        equiposEliminados.classList.remove('ocultar');
    }
    confirmarJugadoresRuleta.addEventListener('click', elegirEliminados);

    comenzarPartidos.addEventListener('click', armandoPartidos);

    const nombresJugadores = [];
    const equiposArray = [];

    function empezarTorneo() {
        eliminarJugadorO.classList.add('ocultar');
        torneoOk.classList.remove('ocultar');
    }
    
    empezarArmar.addEventListener('click', empezarTorneo)
    
    function ingresarJugadores () {
        console.log("funcionando");
        const cantJugadoresInt = parseInt(cantJugadores.value); //transformo la cantidad ingresada de string a entero
        nombresJugadores.length = 0;
        equiposArray.length = 0;
        listaJugadores.innerHTML = "";
        
        if (cantJugadoresInt % 3 !=0 || cantJugadoresInt <=3){
            alert("Ingrese numero multiplo de 3, minimo 6 jugadores");
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
        for (const input of inputs){ //forEach recorre todos los elementos que estan en inputs
            const nombre = input.value.trim(); //input.value obtiene lo que el usuario guardo en el campo, y trim le quita los espacio en blanco al final y al prncipio, todo esto lo guardo en la const nombre
            if (nombre === "") {
                alert("Por favor, complete todos los campos");
                return;
            } else {
                nombresJugadores.push(nombre);
            }
        };

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
            equiposLi.textContent = `Equipo ${i+1}:`+' '+nombresJugadores[j]+','+nombresJugadores[j+1]+','+nombresJugadores[j+2];
            listaEquipos.appendChild(equiposLi);
            equiposArray.push([nombresJugadores[j], nombresJugadores[j+1], nombresJugadores[j+2]])
            j = j + 3;
        }
        mezclar(equiposArray);
    }

    confirmarJugadores.addEventListener('click', armandoEquipos);
    
    function armandoPartidos () {
        partidos.classList.remove('ocultar');
        formularioEquipos.classList.add('ocultar');
        equiposEliminados.classList.add('ocultar');
        listasPartidos.innerHTML = "";
        
        if (equiposArray.length % 2 == 0){
            let k = 0;
            let l = 1;
            for(let i = 0;  i < equiposArray.length / 3; i++) {
                const nuevoPartido = document.createElement('li');
                nuevoPartido.textContent =  "Partido "+l+": "+"("+equiposArray[k]+")"+" vs "+"("+equiposArray[k+1]+")";
                k = k + 2;
                l = l + 1;
                listasPartidos.appendChild(nuevoPartido);
            }
        } else if (equiposArray.length % 3 == 0) {
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
            for(let i = 0;  i < (equiposArray.length - 1) / 3; i++) {
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









