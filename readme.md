# Simulador de Tráfico con Semáforos

Este proyecto implementa un simulador de tráfico que gestiona el movimiento de vehículos en una carretera con semáforos. La simulación considera el estado de cada semáforo (verde, naranja o rojo) y la posición de los vehículos en la carretera.

## Funcionalidad

1. **Semáforos**:

   - Los semáforos cambian de estado en intervalos específicos:
     - Verde (G) por 5 unidades de tiempo.
     - Naranja (O) por 1 unidad de tiempo.
     - Rojo (R) por 5 unidades de tiempo.

2. **Vehículos**:
   - Los vehículos (C) se mueven hacia adelante en la carretera.
   - Pueden avanzar si el semáforo frente a ellos está en verde o si no hay semáforo.
   - Un vehículo no puede pasar a una posición ocupada por otro vehículo o un semáforo en rojo.

## Instalación

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Levantar la app

   ```bash
    npm run run
   ```

3. Tests

   ```bash
    npm run test
   ```

## Notas

El proyecto no funciona de la forma esperada. Los test fueron creados con el comportamiento adecuado y el resultado esperado.
Luego se adjunto el codigo que resuelve el problema.
Por ahora el unico problema encontrado es el siguiente caso:

- Al tener 2 o mas vehículos en posiciones adjuntas, si el primer vehículo ocupa el lugar de un semaforo en verde, en la siguiente iteracion, todos los vehículos avanzan mientras el semaforo siga verde.
  El problema aca, es que el segundo vehículo deberia frenarse puesto que el primero ocupa el lugar de un semaforo y eso impide al segundo vehículo conocer su estado.

  Para poder arreglar este problema hay que cambiar la logica para verificar si el vehículo en su posicion, posee un vehículo en la posicion anterior y en ese caso, el vehículo no deberia avanzar a la siguiente posicion hasta que el vehiculo de adelante no haya dejado el espacio del semaforo para conocer su estado
