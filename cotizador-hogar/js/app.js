
//Variable factor multiplicador (fm) para el tipo de vivienda.
let fm;

//valor numérico correspondiente al Costo Base de cada metro cuadrado.
const costoBaseM2 = 1000;

//Solicita al usuario los metros cuadrados de la vivienda.
let metrosCuadrados = prompt('Ingresa los metros cuadrados de la vivienda: ');

//Cálculo de la cuota póliza.
//let resultado = costoBaseM2 * metrosCuadrados * fm;

// Solicitar al usuario que ingrese un tipo de vivienda a través de un cuadro de diálogo prompt()
let tipoDeVivienda = prompt('Seleccione su tipo de vivienda: \n' +  "('Casa', 'P.H.', 'Dto. Edificio', 'Barrio Privado', 'Oficina', 'Local comercial', 'Depósito logística')")

//Cuadro de diálogo alert(), con el calculo del monto total de la póliza.
//alert ('el costo es: $   ' + resultado )

//Validar el dato ingresado por el usuario y asigna un valor a esta variable, de acuerdo al factor multiplicador que tenemos en el documento HTML.
switch (tipoDeVivienda) {
    case 'Casa':
        fm = 1.009;
        break
    case 'P.H':
        fm = 1.005;
        break
    case 'Dto. Edificio':
        fm = 1.002;
        break;
    case 'Barrio Privado':
        fm = 1.019;
        break;
    case 'Oficina':
        fm = 1.039;
        break;
    case 'Local comercial':
        fm = 1.041;
        break;
    case 'Desposito logistico':
        fm = 1.092;
        break;
    default:
        fm = 1000; // Establece un valor por defecto en caso de ingreso incorrecto.       
}

//Validación  'fm'  mayor a 1.000 y que metros2 sea un número
//Cálculo de la cuota de la póliza.
if (fm > 1.000 && !isNaN(metrosCuadrados)) {
    let resultado = fm  * metrosCuadrados * costoBaseM2;
        console.log('Costo de la poliza: $  ' + resultado);
} else {
    console.warn('Hubo un error en el ingreso de datos.');
}

let propiedad, ubicacion, metros2;

// Corregir la comparación de tipo de vivienda
    if (tipoDeVivienda !== '') {
        for (propiedad of datosPropiedad("/")) {
            if (propiedad.tipo === tipoDeVivienda) {
                propiedad = propiedad
                break
            }
        }
    }
    
    
let tipoUbicacion = prompt("Selecciona la ubicación de la vivienda: \n" +
                          "('CABA', 'Tandil', 'Costa Atlántica')")
// Verifica si tipoUbicacion es diferente a vacío antes de realizar la comparación.
    if (tipoUbicacion !== '') {
        for (ubicacion of tipoUbicacion) {
            if (ubicacion.tipo === tipoUbicacion) {
                ubicacion = ubicacion
                break
            }
        }
    }

// Verifica si todas las variables necesarias están definidas y si metros2 es un número.
if (propiedad && ubicacion && parseInt(metros2)) {
    let resultado = propiedad.factor * ubicacion.factor * metros2 * costoBaseM2;
    console.log("Resultado de la Póliza: $ " + resultado)
} else {
    console.warn("Hubo un error en los datos ingresados.")
}