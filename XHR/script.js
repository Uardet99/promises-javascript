/*
XHR, que significa XMLHttpRequest, es un objeto en JavaScript que permite 
interactuar con servidores a traves de HTTP, para enviar y recibir datos. 
Aunque no es una promesa en si mismo, se pùede usar dentro de una promesa 
para manejar operaciones de red de manera asincronica.
*/

// Función para realizar una solicitud HTTP
function hacerSolicitud(url) {
  return new Promise((resolve, reject) => {
    // Crea una nueva instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Configura la solicitud como una operación GET a la URL proporcionada
    xhr.open("GET", url);

    // Define lo que sucederá cuando la solicitud se complete
    xhr.onload = function () {
      // Verifica si el estado HTTP es exitoso (200-299)
      if (xhr.status >= 200 && xhr.status < 300) {
        // Si es exitoso, resuelve la promesa con la respuesta
        resolve(xhr.response);
      } else {
        // Si falla, rechaza la promesa con el texto del estado
        reject(new Error(xhr.statusText));
      }
    };

    // Define lo que sucederá en caso de error de red
    xhr.onerror = function () {
      // Rechaza la promesa con un error de red
      reject(new Error("Error de red"));
    };

    // Envía la solicitud
    xhr.send();
  });
}

// Usa la función hacerSolicitud para obtener datos
hacerSolicitud("https://www.el-tiempo.net/api/json/v2/home")
  .then((respuesta) => {
    console.log("Datos recibidos:", respuesta);
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
