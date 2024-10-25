// Función para crear un semáforo
function createTrafficLight(initialState) {
  let state = initialState; // Estado inicial del semáforo (G: verde, O: naranja, R: rojo)
  let timer = 0; // Contador de tiempo para cambiar el estado del semáforo

  return {
    // Método para cambiar el estado del semáforo según el tiempo transcurrido
    change: function () {
      timer++; // Incrementar el temporizador en cada llamada
      // Cambiar el estado del semáforo basado en el temporizador
      if (state === "G" && timer === 5) {
        state = "O";
        timer = 0;
      } else if (state === "O" && timer === 1) {
        state = "R";
        timer = 0;
      } else if (state === "R" && timer === 5) {
        state = "G";
        timer = 0;
      }
    },
    // Método para obtener el estado actual del semáforo
    getState: function () {
      return state;
    },
  };
}

// Función principal para simular el tráfico
function simulateTraffic(road, n) {
  // Crear un arreglo de semáforos basado en el estado inicial de la carretera
  const lights = road.map((cell) => {
    if (cell === "G") return createTrafficLight("G"); // Semáforo verde
    if (cell === "O") return createTrafficLight("O"); // Semáforo naranja
    if (cell === "R") return createTrafficLight("R"); // Semáforo rojo
    return null; // No hay semáforo en esta posición
  });

  const cars = []; // Arreglo para almacenar las posiciones de los coches

  // Inicializar coches y su posición en la carretera
  for (let i = 0; i < road.length; i++) {
    if (road[i] === "C") {
      cars.push(i); // Guardar la posición inicial del coche
    }
  }

  const states = []; // Arreglo para almacenar los estados de la carretera en cada iteración

  // Agregar el estado inicial de la carretera
  states.push(road.join("")); // Guardar el estado inicial como cadena

  // Simulación por n unidades de tiempo
  for (let time = 0; time <= n; time++) {
    const currentState = Array.from(road); // Copia del estado actual de la carretera

    // Actualizar el estado de los semáforos
    lights.forEach((light) => {
      if (light) {
        light.change(); // Cambiar el estado de cada semáforo
      }
    });

    // Mover coches de atrás hacia adelante
    for (let i = cars.length - 1; i >= 0; i--) {
      const carPos = cars[i]; // Posición actual del coche
      const lightIndex = carPos < lights.length ? carPos : -1; // Índice del semáforo correspondiente
      const light = lightIndex >= 0 ? lights[lightIndex] : null; // Semáforo en la posición del coche

      // Comprobar el estado del semáforo
      if (light) {
        const lightState = light.getState(); // Obtener el estado actual del semáforo
        // Condiciones para mover el coche
        if (
          lightState === "G" || // Si el semáforo está en verde
          (lightState === "O" && // Si el semáforo está en naranja y en la siguiente iteracion no es roja (asegurarse de que el coche no se salga de la carretera)
            carPos + 1 < road.length &&
            currentState[carPos + 1] !== "R")
        ) {
          cars[i] = carPos + 1; // Mover el coche hacia adelante
        }
      } else {
        // Si no hay semáforo, el coche sigue avanzando
        cars[i] = carPos + 1;
      }

      // Actualizar el estado del vehículo en el estado actual
      if (cars[i] < road.length) {
        currentState[cars[i]] = "C"; // Representar el movimiento del coche
      }
    }

    // Actualizar el estado de los vehículos en el estado actual
    for (let j = 0; j < road.length; j++) {
      if (!cars.includes(j) && road[j] === "C") {
        currentState[j] = "."; // Convertir "C" en "." si no hay vehículo en esa posición
      }
    }

    // Guardar el estado actual de la carretera
    states.push(currentState.join("")); // Guardar el estado actual como cadena
  }

  return states; // Devuelve el estado de la carretera en cada iteración
}

// Ejemplo de uso
const road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."]; // Estado inicial de la carretera
const n = 16; // Número de unidades de tiempo a simular
const result = simulateTraffic(road, n); // Ejecutar la simulación
console.log(result); // Mostrar el resultado de la simulación

module.exports = { simulateTraffic };
