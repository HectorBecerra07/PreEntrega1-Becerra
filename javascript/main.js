// variables para almacenar los valores
let producto = parseFloat(prompt("Ingresa el precio"));
let cantidad = parseInt(prompt("Ingresa la cantidad"));

// Función para calcular el costo total con si if y su else en caso de 
//ser falsa o que no cumpla la condiccion 
function calcularCostoTotal() {
    if (!isNaN(cantidad) && cantidad > 0) {
        // Calcular el costo total
        let costoTotal = producto * cantidad;
        alert("El costo total es: " + costoTotal.toFixed(2));

        
    } else {
        // Mostrar un mensaje de error si la cantidad no es válida
        alert('Ingrese una cantidad válida.');
    }
    
}
calcularCostoTotal();