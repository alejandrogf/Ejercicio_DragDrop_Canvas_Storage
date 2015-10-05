document.getElementById("btnAcceder").addEventListener("click", login);



if (sessionStorage.getItem("nombre")) {
    location.replace("registroClase.html");
}


function login() {
    if (document.getElementById("txtNombre").value == "") {
        alert("Nombre vacio");
        $("#txtNombre").val("");
        return;
    }
    sessionStorage.setItem("nombreAcceso", document.getElementById("txtNombre").value);
    location.replace("registroClase.html");

}

