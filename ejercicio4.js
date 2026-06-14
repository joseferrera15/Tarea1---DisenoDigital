const productos = [
    { 
        nombre: "Televisor", 
        precio: 500, 
        categoria: "Electrónica" 
    },
    { 
        nombre: "Silla", 
        precio: 100, 
        categoria: "Muebles" 
    },
    { 
        nombre: "Laptop", 
        precio: 800, 
        categoria: "Electrónica" 
    },
    { 
        nombre: "Mesa", 
        precio: 200, 
        categoria: "Muebles" 
    },
    { 
        nombre: "Auriculares", 
        precio: 150, 
        categoria: "Electrónica" 
    }
];

const buscarCategoria = 'Muebles'
const productosPorCategorias = productos.filter((product)=>{
    return product.categoria === buscarCategoria
})

console.log(productosPorCategorias)

//Nuevo Array solo con los nombres de los productos filtrados

const productosFiltrados = productosPorCategorias.map((producto) => producto.nombre)

console.log(`Nombres de Productos Filtrados: ${productosFiltrados}`)

//Total de Productos Filtrados
const precioTotalProductos = productosPorCategorias.reduce((total,producto) =>{
    return total+producto.precio
}, 0)

console.log(`Precio Total en Productos: ${precioTotalProductos}`)