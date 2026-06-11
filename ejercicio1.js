//Ejercicio 1
/*fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) return

        return response.json() //ejecuta una nueva promesa
    })
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
*/

//Ejercicio 1
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) return

        return response.json() //ejecuta una nueva promesa
    })
    .then((data) => {
        // 'data' es el array con los 10 usuarios de prueba

        console.log("--- LISTA DE USUARIOS (NAME Y EMAIL) ---");
        
        // Implementación del forEach
        data.forEach((user) => {
            console.log(`Nombre: ${user.name} , Email: ${user.email}`);
        });

    }).catch((error) => {
        console.log(error)
    })