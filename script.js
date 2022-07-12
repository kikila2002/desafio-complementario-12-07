class Producto {
    constructor( nombre , marca , stock , precio ){
    
        this.nombre = nombre
        this.marca = marca
        this.stock = stock
        this.precio = precio 
    }
}

const productos = []

let precio, marca, nombre, seguir, stock;


function buscarProducto(productos) {
    let nombreProducto = prompt("Ingrese un nombre del producto a buscar")

    let productoBuscado = productos.find(producto => producto.nombre == nombreProducto )

    if (productoBuscado == undefined) {
        console.log("Producto no encontrado")
    } else {
        console.log(productoBuscado)
    }
}

function ordenarMenoramayor(productos) {
    console.log(productos.sort((a,b) => a-b))

}

function ordenarMayoramenor(productos) {
    console.log(productos.sort((a,b) => b-a))
}

do {
    
    do {
        nombre = prompt("Ingrese el nombre del producto:").toLowerCase()
        marca = prompt("Ingrese la marco del producto:").toLowerCase()

        if (nombre.length == 0 ) {
            console.log("Porfavor ingrese un nombre valido")
        } 

        if (marca.length == 0) {
            console.log("Porfavor ingrese una marca valida")
        } 

    }while ((nombre.length == 0 || marca.length == 0))

    do {
        
        precio = parseFloat(prompt("Ingrese el precio del producto:"))
        stock =  parseInt(prompt("Ingrese el stock de dicho producto:"))

        if (isNaN(precio) || precio <= 0) {
            console.log("Porfavor ingrese un precio valido")
        }

        if (isNaN(stock) || stock <= 0) {
            console.log("Porfavor ingrese un stock valido")
        }

    } while ((isNaN(precio) || isNaN(stock)) || (precio <= 0 || stock <= 0));

    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)
    seguir = prompt("¿Desea seguir cargando productos?:")

} while (seguir != "no")

let respuesta;

do {
    respuesta = parseInt(prompt(`Ingrese un numero para:
    0- Salir del programa
    1- Buscar producto segun el nombre
    2- Odenar de menor a mayor 
    3- Odenar de mayor a menor 
    `));
} while (respuesta === 0,1,2,3 );

switch (respuesta) {
    case 0:
        console.log("Adios")
        break

    case 1: 
        buscarProducto(productos)
        break
    case 2:
        ordenarMenoramayor(productos)
        break
    case 3:
        ordenarMayoramenor(productos)
        break
    default:
        break
}
