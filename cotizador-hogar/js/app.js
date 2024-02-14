const selectPropiedad = document.querySelector("select#propiedad")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")
const divPrincipal = document.querySelector("div.div-quote")
const spanPoliza = document.querySelector("span#valorPoliza")

// Definición de las variables de factor multiplicador (fm) para el tipo de vivienda y ubicación.
let fmPropiedad;
let fmUbicacion; 

// Valor numérico correspondiente al Costo Base de cada metro cuadrado.
const costoBaseM2 = 1.16;

function cargarComboPropiedad() {
    let opcionPropiedad
    for (let propiedad of datosPropiedad) {
        opcionPropiedad += "<option>" + propiedad.tipo + "</option>"
    }
    selectPropiedad.innerHTML = opcionPropiedad
}

function cargarComboUbicacion() {
    let opcionUbicacion
    for (let ubicacion of datosUbicacion) {
        opcionUbicacion += "<option>" + ubicacion.tipo + "</option>"
    }
    selectUbicacion.innerHTML = opcionUbicacion
}


// Validar si el tipo de vivienda ingresado es válido y asignar el factor multiplicador correspondiente.
function obtenerfmPropiedad() {
    if (selectPropiedad.value !== '') {
        for (let propiedad of datosPropiedad) {
            if (propiedad.tipo === selectPropiedad.value) {
                return propiedad.factor;
            }
        }
    }
}

// Validar si la ubicación ingresada es válida y asignar el factor multiplicador correspondiente.
function obtenerfmUbicacion() {
    if (selectUbicacion.value !== '') {
        for (let ubicacion of datosUbicacion) {
            if (ubicacion.tipo === selectUbicacion.value) {
                return ubicacion.factor;
            }
        }
    } 
}
// Verifica si todas las variables necesarias están definidas y si metros2 es un número.
btnCotizar.onclick = function () {
    divPrincipal.classList.add("div-blocked")
    btnCotizar.innerHTML = '<img src="images/animation.gif">'     

    if (obtenerfmPropiedad() && obtenerfmUbicacion() && parseInt(metros2.value)){
        let resultado = obtenerfmPropiedad() * obtenerfmUbicacion() * parseInt(metros2.value) * costoBaseM2;
        spanPoliza.textContent = resultado.toFixed(2)
        console.log("Resultado de la Póliza: $ " + resultado.toFixed(2));
    } else {
        console.warn("Hubo un error en los datos ingresados.")
    }
    divPrincipal.classList.remove("div-blocked")
    btnCotizar.textContent = 'cotizar'

}

cargarComboPropiedad()
cargarComboUbicacion() 