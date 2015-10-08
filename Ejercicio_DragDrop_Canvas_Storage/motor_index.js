﻿document.getElementById("btnAcceder").addEventListener("click", login);

//if (localStorage.getItem("nombreAcceso")) {
//    location.replace("registroClase.html");
//}

function login() {
    if (document.getElementById("txtNombre").value == "") {
        alert("Nombre vacio");
        $("#txtNombre").val("");
        return;
    }
    localStorage.setItem("nombreAcceso", $("#txtNombre").val());
    location.replace("registroClase.html");//location.href es igual a esta función
}

$(document).ready(function() {
    greet();
});

function greet(){
    var name = localStorage.getItem("nombreAcceso");
    if (name == null || name == "null"){
        $("#txtNombreLabel").html("Hola, desconocido, ¿Cuál es tu nombre?");
    } else {
        $("#txtNombreLabel").html("Hola amigo!");
        $("#txtNombre").val(name);
    } 
} 


