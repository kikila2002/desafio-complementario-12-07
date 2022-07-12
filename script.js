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
    console.log(productos.sort((a,b) => a.precio-b.precio))

}

function ordenarMayoramenor(productos) {
    console.log(productos.sort((a,b) => b.precio-a.precio))
}

function ordenarStockMenoramayor(productos) {
    console.log(productos.sort((a,b) => a.stock-b.stock))

}

function ordenarStockMayoramenor(productos) {
    console.log(productos.sort((a,b) => a.stock-b.stock))

}
do {
    
    do {
        nombre = prompt("Ingrese el nombre del producto:").toLowerCase()
        marca = prompt("Ingrese la marco del producto:").toLowerCase()

    

    }while ((nombre.length == 0 || marca.length == 0))

    do {
        
        precio = parseFloat(prompt("Ingrese el precio del producto:"))
        stock =  parseInt(prompt("Ingrese el stock de dicho producto:"))

        

    } while ((isNaN(precio) || isNaN(stock)) || (precio <= 0 || stock <= 0));

    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)
    seguir = prompt("¿Desea seguir cargando productos?:")

} while (seguir != "no")

let respuesta;

do {
    respuesta = parseInt(prompt(`Ingrese un numero para:
    
    1- Buscar producto segun el nombre
    2- Odenar de menor a mayor segun el precio
    3- Odenar de mayor a menor segun el precio
    4- Odenar de menor a mayor segun el stock
    5- Odenar de mayor a menor segun el stock
    `));

} while (respuesta < 1 || respuesta > 5);

switch (respuesta) {
   
    case 1: 
        buscarProducto(productos)
        break
    case 2:
        ordenarMenoramayor(productos)
        break
    case 3:
        ordenarMayoramenor(productos)
        break
    case 4:
        ordenarStockMenoramayor(productos)
        break
    case 5:
        ordenarStockMayoramenor(productos)
        break
        
    default:
        alert("opcion no valida")
        break
  
}
