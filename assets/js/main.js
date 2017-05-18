window.onload = function() {
    document.getElementById("btn").style.display = 'none';
}

document.addEventListener("click", function() {
    document.getElementById("btn").style.display = 'block';
});


//función para que al hacer click en el botón agrega una nueva tarea hacia abajo
var container = document.getElementById("tarea");
var textArea = document.createElement("textarea");
textArea.setAttribute("placeholder", "Agregar Tarea", id = "text");
textArea.classList.add("text");
container.appendChild(textArea); //indica q textarea es hijo de container y que ahí queda ubicado en el html

function agregar() { //boton genera un evento de js

    var text = textArea.value; //esto significa que estoy "agarrando" el valor aquí y necesito que aparezca debajo del boton en la lista
    var contieneLista = document.getElementById("lista")
    var listado = document.createElement("p");
    var lista = document.createTextNode(text)
    listado.appendChild(lista);
    contieneLista.appendChild(listado);

}