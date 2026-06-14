
//Ejercicio 1
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) return

        return response.json() 
    })
    .then((data) => {

        console.log("--- LISTA DE USUARIOS (NAME Y EMAIL) ---");
        
        // Ciclo forEach
        data.forEach((user) => {
            console.log(`Nombre: ${user.name} , Email: ${user.email}`);
        });

    }).catch((error) => {
        console.log(error)
    })