let notas = [9, 7, 8, 9, 3]; // array con las notas 

// funcion para mostrar las notas en la página
function listarNotas() {
  let lista = document.getElementById("notas"); // busca "notas" en el html como para saber el lugar
  for (let i = 0; i < notas.length; i++) { // recorrido del array, comienza en la primer nota, va a recorrer todas y cada que pasa se le agrega 1 para que se use la siguiente nota
    lista.innerHTML += "<li>" + notas[i] + "</li>"; // se van agregando las notas al ul
  }
}

// funcion para calcular el promedio
function CalcularPromedio() {
  let suma = 0; // variable suma que inicia con cero
  for (let i = 0; i < notas.length; i++) { // recorre todas las notas
    suma += notas[i]; // va sumando las notas 
  }
  let promedio = suma / notas.length; // divide la suma entre la cantidad de notas para obtener el promedio
  document.getElementById("promedio").textContent = promedio; // muestra el promedio dentro del <span> con id "promedio"
}

// funcion para encontrar la nota más alta
function notaMasAlta() {
  let mayor = notas[0]; // suponemos que la primer nota es la mas alta para luego hacer la comparacion con el resto de notas
  for (let i = 1; i < notas.length; i++) { // recorre el array de las notas
    if (notas[i] > mayor) { // si la nota es mayor a la primera
      mayor = notas[i]; // guarda esa nota como la mayor
    }
  }
  document.getElementById("mayor").textContent = mayor; // muestra la nota más alta en el <span> con id "mayor"
}

// funcion para revisar si hay aplazo
function consultarAplazo() {
  let hayAplazo = false; // se crea la variable hayAplazo y le decimos que no hay
  for (let i = 0; i < notas.length; i++) { // recorre el array de las notas
    if (notas[i] < 4) { // si hay una nota menor a 4
      hayAplazo = true; // cambia a true diciendo que si hay aplazo
      break; // ponemos el break para que que no siga buscando porque ya tenemos la respuesta
    }
  }

  if (hayAplazo) { // si hay aplazo
    document.getElementById("aplazo").textContent = "Sí"; // muestra "Sí" en el span
  } else { // si no hay aplazo
    document.getElementById("aplazo").textContent = "No"; // muestra "No"
  }
}