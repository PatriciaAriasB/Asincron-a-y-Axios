//1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder
//En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. 
//Leyendo su documentación, deberás hacer lo siguiente:

//Imprimir por consola la lista (array) de usuarios.

const API_URL = "https://jsonplaceholder.typicode.com/users"


// function getTodos() {
//     axios
//         .get(API_URL)
//         .then((res) => showOutput(res))
//         .catch((err) => console.error(err));
// }

// console.log(getTodos);

//FLETCH:

fetch(API_URL)
.then(res => res.json())// JSON.PARSE()
.then(res => console.log(res))
.catch((err) => console.error(err));

//AXIOS GET:

axios.get(API_URL)
.then(users => {
  console.log(users.data);
})



//Imprimir por consola solo el nombre de los usuarios.

axios.get(API_URL)
 .then(function(response) {
const names = response.data.map(user => user.name);
console.log(names);
})

//   Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, 
//   rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.

//   Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que 
//   JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información
//    de la solicitud.
   
  // archivo JS
  
  
  // variable global
  // petición axios (aquí hago la petición y dentro relleno la variable creada anteriormente)

 
// // Variable global "users"
// let users;

// // Realizar la solicitud Axios para obtener los usuarios y asignarla a la variable global "users"
// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     // Asignar la respuesta de la API a la variable global "users"
//     users = response.data;
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });



// Variable global "users"
let users = [];

// Realizar la solicitud utilizando Axios y rellenar la variable global "users"
axios.get(API_URL)
  .then(response => {
    
    // Asignar la respuesta de la API a la variable global "users"
    users = response.data;
  })
  .catch(error => {
    console.error('Errors:', error);
  });



// Función para mostrar los nombres de los usuarios en el DOM
function showUsersInDOM() {


  // Obtener el elemento del DOM donde queremos mostrar los nombres de los usuarios
  const userList = document.getElementById('user-list');

  
  // Iterar sobre cada usuario y agregar su nombre al DOM
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user.name;
    userList.appendChild(listItem);
  });
}

// Función para ejecutar showUsersInDOM cuando se hace clic en el botón
function handleClick() {
  showUsersInDOM();
}

// Agregar un evento de clic al botón
document.getElementById('show-users-btn').addEventListener('click', handleClick);



// 1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?

// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. 
//Leyendo su documentación, deberás hacer lo siguiente:


// Imprimir por consola la lista de razas de todos los perros.

const API_DOGS = "https://dog.ceo/dog-api/"

const API_ALL_DOGS = "https://dog.ceo/api/breeds/list/all"

// axios.get(API_ALL_DOGS)
//  .then(function(response) {
// const AllDogs = response.data.map(AllDogs => AllDogs.name);
// console.log(names);
// })

axios.get(API_ALL_DOGS)
  .then(response => {
    // Obtener las razas de perros del objeto de respuesta
    const allDogs = Object.keys(response.data.message);

    // Imprimir por consola la lista de razas de todos los perros
    console.log("Lista de todas las razas de perros:");
     allDogs.forEach(allDogs => {
      console.log(allDogs);
    });
  })
  .catch(error => {
    console.error('Error al obtener la lista de razas de perros:', error);
  });

