const tareas =[{
    descripcion: "Comprar Leche",
    completado: false
},
{
    descripcion: "Hacer Comida",
    completado: false
}

]
console.log(tareas)

/*agregarTarea((tareas, descripcion, completado = false) =>{
    tareas.push(descripcion)
   
})
*/
 const agregarTarea = (descripcion)=>{
    const nuevaTarea = {
        descripcion,
        completado:false
    };
    tareas.push(nuevaTarea)
};
agregarTarea("Lavar Cocina")
agregarTarea("Botar Basura")

console.log(tareas)

const marcarTareaComoCompletada=(descripcion)=>{
    const encontrarTarea = tareas.find(tarea => tarea.descripcion === descripcion)
    if(encontrarTarea){
        encontrarTarea.completado = true
    }
    console.log("Tarea no encontrada")
}
marcarTareaComoCompletada("Lavar Cocina")
marcarTareaComoCompletada("Botar Basura")
console.log(tareas)

const listarTareasPendientes =() =>{
    const tareasPendientes = tareas.filter((tarea)=>{
    return tarea.completado === false
})
    console.log(tareasPendientes)
}
const listarTareasCompletadas =() =>{
    const tareasCompletados = tareas.filter((tarea)=>{
    return tarea.completado === true
})
    console.log(tareasCompletados)
}

listarTareasPendientes()
listarTareasCompletadas()
