//if (!sessionStorage.getItem("nombre")) {
//    location.replace("index.html");
//}


function dibujarMesa() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //Color
    var e = document.getElementById("color_id");
    ctx.fillStyle = e.options[e.selectedIndex].value;
    //Dibujar rectangulo, con posX, posY, alto, ancho

    var y = $("#txtPosY").val();

    ctx.fillRect(document.getElementById("#txtPosX"), y, $("#txtAlto").val(), $("#txtAncho").val());
};

$(document).ready(function () {

    $("#btnRegistrar").click(dibujarMesa);

});