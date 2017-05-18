//funcion que hace q no se vea el boton al cargar la pág
window.onload = function() {
        document.getElementById("btn").style.display = 'none';
    }
    //Botón aparece al hacer click dentro del textarea
document.addEventListener("click", function() {
    document.getElementById("btn").style.display = 'block';
});

//Creo el espacio donde se ingresan las tareas a la lista
var container = document.getElementById("tarea");
var textArea = document.createElement("textarea");
textArea.setAttribute("placeholder", "Agregar Tarea", id = "text");
textArea.classList.add("text");
container.appendChild(textArea); //indica q textarea es hijo de container y que ahí queda ubicado en el html

//función para que al hacer click en el botón agrega una nueva tarea hacia abajo

function agregar() { //boton genera un evento de js, pero me agrega las tareas como lista y no en una tarjeta

    var text = textArea.value; //esto significa que estoy "agarrando" el valor aquí y necesito que aparezca debajo del boton en la tarjeta
    var contieneLista = document.getElementById("lista")
    var listado = document.createElement("p");
    var lista = document.createTextNode(text)
    listado.appendChild(lista);
    contieneLista.appendChild(listado);
}

//quiero que lista (es el titulo) aparezca en una tarjeta
var tarjeta = document.getElementById(lista);
tarjeta.setAttribute("placeholder");
document.createElement("div");