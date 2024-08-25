const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

// Realizar la petición fetch para obtener los datos
fetch(DATA_URL)
  .then(response => response.json())
  .then(data => {
    // Extraer el array de estudiantes del objeto JSON
    const students = data.students;
    // Mostrar los datos de los estudiantes
    showData(students);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
    // Aquí puedes agregar un mensaje de error al usuario, por ejemplo:
    container.innerHTML = '<p>Error al cargar los datos. Por favor, intenta más tarde.</p>';
  });
