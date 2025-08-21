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
const nombresJugadores = [];
const equiposArray = [];

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

    function inputsRuleta (){
        const cantJugadoresInt0 = parseInt(cantJugadoresInput0.value);
        const cantEliminarInt = parseInt(cantEliminar.value);

        nombresJugadores.length = 0;
        listaJugadores.innerHTML = "";

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
        nombresJugadores.length = 0;
        equiposArray.length = 0

        const cantJugadoresInt01 = parseInt(cantJugadoresInput0.value);
        const inputs = document.querySelectorAll('.input-jugador');
        nombresJugadores.length = 0;
        for (const input of inputs){ //forEach recorre todos los elementos que estan en inputs
            const nombre = input.value.trim(); //input.value obtiene lo que el usuario guardo en el campo, y trim le quita los espacio en blanco al final y al prncipio, todo esto lo guardo en la const nombre
            if (nombre === "") {
                alert("Por favor, complete todos los campos");
                return;
            } else {
                nombresJugadores.push(nombre);
            }
        }

        function mezclar (array){
            for (let i = array.length-1;i>0;i--){
                const j = Math.floor(Math.random()*(i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
        }

        mezclar(nombresJugadores);

        let j = 0;
        const cantEliminarInt = parseInt(cantEliminar.value);
        const cantidadEquipos = (cantJugadoresInt01-cantEliminarInt)/2;

        for (let i = 0; i < cantidadEquipos; i++){
            const equiposLi0 = document.createElement('li')
            equiposLi0.textContent = `Equipo ${i+1}:`+' '+nombresJugadores[j]+','+' '+nombresJugadores[j+1];
            listaEquipos0.appendChild(equiposLi0);
            equiposArray.push([nombresJugadores[j], nombresJugadores[j+1]])
            j = j + 2
        }
        let k = 1;
        for (let i = nombresJugadores.length - 1; i >= nombresJugadores.length-cantEliminarInt; i--) {
            const jugadoresEliminadosLi = document.createElement('li');
            jugadoresEliminadosLi.textContent = `Eliminado/s:`+" "+nombresJugadores[i];
            jugadoresEliminados.appendChild(jugadoresEliminadosLi);
            k = k + 1;
        }

        ruletaEliminados.classList.add('ocultar');
        equiposEliminados.classList.remove('ocultar');
    }
    confirmarJugadoresRuleta.addEventListener('click', elegirEliminados);

    comenzarPartidos.addEventListener('click', armandoPartidos);

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
        listaEquipos.innerHTML = "";
        listasPartidos.innerHTML = "";
        jugadoresEliminados.innerHTML = "";
        listaJugadores0.innerHTML = "";
        listaEquipos0.innerHTML = "";
        
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
        equiposArray.length = 0;
        listaEquipos.innerHTML = "";
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

    function inputsRuleta (){
        const cantJugadoresInt0 = parseInt(cantJugadoresInput0.value);
        const cantEliminarInt = parseInt(cantEliminar.value);

        nombresJugadores.length = 0;
        listaJugadores.innerHTML = "";

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
        nombresJugadores.length = 0;
        equiposArray.length = 0
        
        const cantJugadoresInt01 = parseInt(cantJugadoresInput0.value);
        const inputs = document.querySelectorAll('.input-jugador');
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

        let j = 0;
        const cantEliminarInt = parseInt(cantEliminar.value);
        const cantidadEquipos = (cantJugadoresInt01-cantEliminarInt)/3;

        for (let i = 0; i < cantidadEquipos; i++){
            const equiposLi0 = document.createElement('li')
            equiposLi0.textContent = `Equipo ${i+1}:`+' '+nombresJugadores[j]+','+' '+nombresJugadores[j+1]+','+' '+nombresJugadores[j+2];;
            listaEquipos0.appendChild(equiposLi0);
            equiposArray.push([nombresJugadores[j], nombresJugadores[j+1]])
            j = j + 3
        }
        let k = 1;
        for (let i = nombresJugadores.length - 1; i >= nombresJugadores.length-cantEliminarInt; i--) {
            const jugadoresEliminadosLi = document.createElement('li');
            jugadoresEliminadosLi.textContent = `Eliminado/s:`+" "+nombresJugadores[i];
            jugadoresEliminados.appendChild(jugadoresEliminadosLi);
            k = k + 1;
        }

        ruletaEliminados.classList.add('ocultar');
        equiposEliminados.classList.remove('ocultar');
    }
    confirmarJugadoresRuleta.addEventListener('click', elegirEliminados);

    comenzarPartidos.addEventListener('click', armandoPartidos);

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

const inicioContador = document.getElementById('contador');
const itemContador = document.getElementById('item-contador');
const masNos = document.getElementById('mas-nos');
const menosNos = document.getElementById('menos-nos');
const masEllos = document.getElementById('mas-ellos');
const menosEllos = document.getElementById('menos-ellos');
const aceptar = document.getElementById('aceptar');
const grupo1 = document.getElementById('grupo1');
const grupo2 = document.getElementById('grupo2');
const grupo3 = document.getElementById('grupo3');
const grupo4 = document.getElementById('grupo4');
const grupo5 = document.getElementById('grupo5');
const grupo6 = document.getElementById('grupo6');
const grupo01 = document.getElementById('grupo01');
const grupo02 = document.getElementById('grupo02');
const grupo03 = document.getElementById('grupo03');
const grupo04 = document.getElementById('grupo04');
const grupo05 = document.getElementById('grupo05');
const grupo06 = document.getElementById('grupo06');
const nuevoPartido = document.getElementById('nuevo-partido');
const nuevoContador = document.getElementById('nuevo-contador');
const cancelarNuevoPartido = document.getElementById('cancelar-nuevo-partido');
let hrNos = null;
let hrEllos = null;

function iniciarContador (){
    inicio.classList.add('ocultar');
    itemContador.classList.remove('ocultar');
    let cuentaNos = 0;
    let grupoContadorNos = 0;
    let cuentaEllos = 0;
    let grupoContadorEllos = 0;

    function agregar() {
        console.log("Ejecutando");
        cuentaNos++; // aumenta la variable global
        grupoContadorNos++;
    
        // Crear imagen
    const nuevoFosforo = document.createElement("img");

    if (cuentaNos % 5 == 0) {
            nuevoFosforo.src = "fosforo.png"; // tu ruta
            nuevoFosforo.classList.add("fosforo-horizontal");
    } else {
    nuevoFosforo.src = "fosforo.png"; // tu ruta
    nuevoFosforo.classList.add("fosforo");
    }

    if (grupoContadorNos <=5) {
        grupo1.appendChild(nuevoFosforo);
    } else if (grupoContadorNos <=10){
        grupo2.appendChild(nuevoFosforo);
    } else if (grupoContadorNos <=15){
        grupo3.appendChild(nuevoFosforo);
    } else if (grupoContadorNos <=20){
        if (grupoContadorNos === 16) {
            hrNos = document.createElement("hr");
            grupo3.parentNode.insertBefore(hrNos, grupo4);
        }
        grupo4.appendChild(nuevoFosforo);
    } else if (grupoContadorNos <=25){
        grupo5.appendChild(nuevoFosforo);
    } else if (grupoContadorNos <=30){
        grupo6.appendChild(nuevoFosforo);
    } 
    
    }

    function restar() {
        if (cuentaNos <= 0) return; // nada que restar
        cuentaNos--;
        grupoContadorNos--;

        // Ver cuál es el último grupo con fósforos
        let ultimoGrupo;
        if (grupoContadorNos < 5) ultimoGrupo = grupo1;
        else if (grupoContadorNos < 10) ultimoGrupo = grupo2;
        else if (grupoContadorNos < 15) ultimoGrupo = grupo3;
        else if (grupoContadorNos < 20) ultimoGrupo = grupo4;
        else if (grupoContadorNos < 25) ultimoGrupo = grupo5;
        else ultimoGrupo = grupo6;

        // Eliminar el último fósforo del grupo correspondiente
        if (ultimoGrupo.lastChild) {
            ultimoGrupo.removeChild(ultimoGrupo.lastChild);
        }
    }

    masNos.addEventListener('click', agregar);
    menosNos.addEventListener('click', restar);
    
    function agregar2() {
        console.log("Ejecutando");
        cuentaEllos++; // aumenta la variable global
        grupoContadorEllos++;
    
        // Crear imagen
    const nuevoFosforo = document.createElement("img");

    if (cuentaEllos % 5 == 0) {
            nuevoFosforo.src = "fosforo.png"; // tu ruta
            nuevoFosforo.classList.add("fosforo-horizontal");
    } else {
    nuevoFosforo.src = "fosforo.png"; // tu ruta
    nuevoFosforo.classList.add("fosforo");
    }

    if (grupoContadorEllos <=5) {
        grupo01.appendChild(nuevoFosforo);
    } else if (grupoContadorEllos <=10){
        grupo02.appendChild(nuevoFosforo);
    } else if (grupoContadorEllos <=15){
        grupo03.appendChild(nuevoFosforo);
    } else if (grupoContadorEllos <=20){
        if (grupoContadorEllos === 16) {
            hrEllos = document.createElement("hr");
            grupo03.parentNode.insertBefore(hrEllos, grupo04);
        }
        grupo04.appendChild(nuevoFosforo);
    } else if (grupoContadorEllos <=25){
        grupo05.appendChild(nuevoFosforo);
    } else if (grupoContadorEllos <=30){
        grupo06.appendChild(nuevoFosforo);
    } 
    
    }

    function restar2() {
        if (cuentaEllos <= 0) return; // nada que restar
        cuentaEllos--;
        grupoContadorEllos--;

        // Ver cuál es el último grupo con fósforos
        let ultimoGrupo;
        if (grupoContadorEllos < 5) ultimoGrupo = grupo01;
        else if (grupoContadorEllos < 10) ultimoGrupo = grupo02;
        else if (grupoContadorEllos < 15) ultimoGrupo = grupo03;
        else if (grupoContadorEllos < 20) ultimoGrupo = grupo04;
        else if (grupoContadorEllos < 25) ultimoGrupo = grupo05;
        else ultimoGrupo = grupo06;

        // Eliminar el último fósforo del grupo correspondiente
        if (ultimoGrupo.lastChild) {
            ultimoGrupo.removeChild(ultimoGrupo.lastChild);
        }
    }

    masEllos.addEventListener('click', agregar2);
    menosEllos.addEventListener('click', restar2);

    function confirmarReset(){
        nuevoContador.classList.remove('ocultar');

    function aceptarFun() {
        nuevoContador.classList.add('ocultar');
        
        cuentaNos = 0;
        cuentaEllos = 0;
        grupoContadorNos = 0;
        grupoContadorEllos = 0;
        
        [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6,
            grupo01, grupo02, grupo03, grupo04, grupo05, grupo06]
            .forEach(grupo => grupo.innerHTML = '');
            
        if (hrNos) { hrNos.remove(); hrNos = null; }
        if (hrEllos) { hrEllos.remove(); hrEllos = null; }

        }
        
    aceptar.addEventListener('click', aceptarFun);

    function cancelarNuevo(){
        nuevoContador.classList.add('ocultar');
    }
    
    cancelarNuevoPartido.addEventListener('click', cancelarNuevo);

    }
    nuevoPartido.addEventListener('click', confirmarReset);

    function cancelarNuevo(){
    nuevoContador.classList.add('ocultar');
    }
    
    cancelarNuevoPartido.addEventListener('click', cancelarNuevo);


    
}

inicioContador.addEventListener('click', iniciarContador);



 




