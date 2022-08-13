let url = 'https://jsonplaceholder.typicode.com/users'// se define una variable con url donde se hace referencia al origen de los datos 
fetch(url)//solicitud a la url
    .then(response => response.json())//se resuelve la promesa, devuelve una respuesta pasandola aun determinado formato, en este caso JSON
    .then(data => mostrarData(data))// se lee este objeto data y se muestra por consola
    .catch(error => console.log(error)) //si hay un error sera tarpado por la plabra catch

const mostrarData = (data)=>{
    console.log(data)
    let body = ''
    for (let i=0; i<data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}