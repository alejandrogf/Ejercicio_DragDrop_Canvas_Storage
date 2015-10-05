if (!localStorage.getItem("nombreAcceso")) {
    location.replace("index.html");
}

var color = undefined;
var url = "https://alumnoscurso.azure-mobile.net/Tables/clase09";

// Object model
function mesa(posx, posy, alto, ancho, color) {
    this.posx = posx;
    this.posy = posy;
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
}

function obtenerColor(s) {
   return color = (s[s.selectedIndex].value); // get value
}

function dibujarMesa() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //Color
    //Si no se ha seleccionado color, por defecto será blanco
    if (!color) {
        ctx.fillStyle = "#FFFFFF";
    } else {
        ctx.fillStyle = color;
    };
    
    //Posicion
    ctx.fillRect($("#txtPosX").val(), $("#txtPosY").val(), $("#txtAlto").val(), $("#txtAncho").val());

    //Almaceno los datos en local
    almacenarDatosLocal();

    //borro los datos del formulario
    limpiarDatos();
};

function limpiarDatos() {
    $("#txtPosX").val("");
    $("#txtPosY").val("");
    $("#txtAlto").val("");
    $("#txtAncho").val("");
}

function actualizarBBDD() {
    var contadorMesa = localStorage.getItem('contadorMesa');
    for (i = 1; i <= contadorMesa; i++) {
        //var number = parseInt(i) + 1;
        var mesa = jQuery.parseJSON(localStorage.getItem("Mesa_" + i));

        $.ajax({
            method: "post",
            url: url,
            success: function(res) {
                console.log(res);
            },
            error: function(err) {
                console.log(err);
            },
            data: mesa,
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            }
        });


    }

}

function almacenarDatosLocal() {

    // Making a new object    
    var nuevaMesa = new mesa(
        $("#txtPosX").val(),
        $("#txtPosY").val(),
        $("#txtAlto").val(),
        $("#txtAncho").val(),
        color);

        if (localStorage.contadorMesa == undefined) {
            localStorage.setItem("contadorMesa", 0);
        }
        var contadorMesa = parseInt(localStorage.contadorMesa) + 1;
        commitToStorage(contadorMesa, nuevaMesa);
    //commitToStorage(guitarSize,createdGuitar);
}

function commitToStorage(contadorMesa, nuevaMesa) {
    // The unique key of the object:
    var key = 'Mesa_' + contadorMesa;
    localStorage.setItem('contadorMesa', contadorMesa);

    // Put the object into storage
    localStorage.setItem(key, JSON.stringify(nuevaMesa));
}




$(document).ready(function () {
    
    $("#btnRegistrar").click(dibujarMesa);
    $("#btnActualizar").click(actualizarBBDD);


    var contadorMesa = localStorage.getItem('contadorMesa');
    for (i = 1; i <= contadorMesa; i++) {
        //var number = parseInt(i) + 1;
        var mesa = jQuery.parseJSON(localStorage.getItem("Mesa_" + i));
        recuperarMesa(mesa); 
    }
});

function recuperarMesa(mesa) {

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = mesa.color;
        ctx.fillRect(mesa.posx, mesa.posy, mesa.alto, mesa.ancho);
    }