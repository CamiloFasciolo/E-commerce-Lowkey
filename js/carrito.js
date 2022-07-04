console.log("Ingresa los productos al registro de stock")
alert("Para finalizar el ingreso de los productos escriba ESC en vez de un producto")

let x = prompt("Ingrese cantidad de pedidos")

function productos() {

    for (let i = 0; i < x; i++) {

        let producto = prompt("Ingrese el producto").toUpperCase()
        while (producto == "") {
            alert("Error. Ingrese el nombre del producto")
            producto = prompt("producto").toUpperCase()
        }
        if (producto == "ESC") {
            break
        }
        let precio = parseInt(prompt("precio"))
        while (isNaN(precio)) {
            alert("Error. Ingrese el precio del producto")
            precio = parseInt(prompt("precio"))
        }
        let cantidad = parseInt(prompt("cantidad"))
        while (isNaN(cantidad)) {
            alert("Error. Ingrese la cantidad del producto")
            cantidad = parseInt(prompt("cantidad"))
        }

        console.log(i + " " + producto + " " + precio + " " + cantidad)

    }


}

productos(x)