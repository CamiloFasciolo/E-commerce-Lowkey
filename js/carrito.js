alert("Bienvenidos a Lowkey")
const x = Infinity
let carrito = []
const remeras = 300
const buzos = 1500
const pantalones = 200
let cantidadRemeras;
let cantidadBuzos;
let cantidadPantalones;

function catalogo() {
    for (let i = 0; i < x; i++) {
        let ingreso = parseInt(prompt("Catalogo: \n 1-Remeras \n 2-Buzos \n 3-Pantalones \n 4-Salir"))
        if (ingreso == 1) {
            cantidadRemeras = parseInt(prompt("Ingrese cantidad de remeras"))
            carrito += (cantidadRemeras*remeras)
        } else if (ingreso == 2) {
            cantidadBuzos = parseInt(prompt("Ingrese cantidad de buzos"))
            carrito += (cantidadBuzos*buzos)
        }
        if (ingreso == 3) {
            cantidadPantalones = parseInt(prompt("Ingrese cantidad de pantalones"))
            carrito += (cantidadPantalones*pantalones)
        } else if (ingreso == 4) {
            console.log(`El total de la compra es: ${carrito} \n remeras : ${cantidadRemeras} \n buzos : ${cantidadBuzos} \n pantalones : ${cantidadPantalones}`)
            break
        }
    }
}
catalogo(x)