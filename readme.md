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
