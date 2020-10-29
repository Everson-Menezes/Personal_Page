var display
function exibirDiv(idDiv) {
    display = window.document.getElementById(idDiv).style.display;
    if (display == "none") {
        window.document.getElementById(idDiv).style.display = "block";
    }
}

function ocultarDiv(idDiv) {
    display = window.document.getElementById(idDiv).style.display;
    if (display == "block") {
        window.document.getElementById(idDiv).style.display = "none";
    }
}