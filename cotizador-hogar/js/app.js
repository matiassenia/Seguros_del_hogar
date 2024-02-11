

// Definición de las variables de factor multiplicador (fm) para el tipo de vivienda y ubicación.
let fmPropiedad;
let fmUbicacion; 

// Valor numérico correspondiente al Costo Base de cada metro cuadrado.
const costoBaseM2 = 1.16;

//Solicita al usuario los metros cuadrados de la vivienda.
let metrosCuadrados = prompt('Ingresa los metros cuadrados de la vivienda: ');

// Solicitar al usuario que ingrese un tipo de vivienda a través de un cuadro de diálogo prompt()
let tipoVivienda = prompt('Seleccione su tipo de vivienda: \n' +  "('Casa', 'P.H.', 'Dto. Edificio', 'Barrio Privado', 'Oficina', 'Local comercial', 'Depósito logística')")

// Validar si el tipo de vivienda ingresado es válido y asignar el factor multiplicador correspondiente.
if (tipoVivienda !== '') {
    for (let propiedad of datosPropiedad) {
        if (propiedad.tipo === tipoVivienda) {
            fmPropiedad = propiedad;
            break
        }
    }
}

// Solicitar al usuario que ingrese la ubicación de la vivienda.
let tipoUbicacion = prompt ("Selecciona la ubicación de la vivienda: \n" + "('CABA', 'Tandil', 'Costa Atlantica', 'Patagonia Argentina')")

// Validar si la ubicación ingresada es válida y asignar el factor multiplicador correspondiente.
if (tipoUbicacion !== '') {
    for (let ubicacion of datosUbicacion) {
        if (ubicacion.tipo === tipoUbicacion) {
            fmUbicacion = ubicacion;
            break
        }
    }
} 

// Verifica si todas las variables necesarias están definidas y si metros2 es un número.
if (fmPropiedad && fmUbicacion && !isNaN(parseFloat(metrosCuadrados))){
    let resultado = fmPropiedad.factor * fmUbicacion.factor * metrosCuadrados * costoBaseM2;
    console.log("Resultado de la Póliza: $ " + resultado.toFixed(2));
} else {
    console.warn("Hubo un error en los datos ingresados.")
}