function consultarBaseDeDatos(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const random =Math.floor(Math.random()*10);
            console.log(random)
            if(random % 2 === 0){
                resolve(true)
            }
            reject(`Error en la consulta ${random}`)
        }, 3000); 
    })
    
}

/*consultarBaseDeDatos()
    .then((resultado)=>{
        console.log('Consulta exitosa')
    })
    .catch((error)=>{
        console.log(error)
    })
*/
const  ejecutarConsulta = async()=>{
    try{
        const response = await consultarBaseDeDatos()
     
        console.log('Consulta exitosa')
    }
    catch(error){
       console.log(error)
    }
}
ejecutarConsulta()