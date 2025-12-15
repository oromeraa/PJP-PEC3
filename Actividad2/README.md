# Actividad 2

- Pon un ejemplo práctico de un escenario donde sea necesario el uso de promesas. Intenta ser original y describe detalladamente el escenario.
Pues, siguiendo la linea de la actividad 1, un posible escenario sería uno en el que mandas la instrucción a tu casa domótica de ajustar la temperatura de la casa antes de llegar a casa en una noche de invierno. La secuencia que haría es:
    - Solicita al termómetro la temperatura y esperas a recibirla.
    - Si la temperatura es más alta que el umbral no hace nada. Si es más baja continua.
    - Comprueba que las ventanas estén cerradas a través de sensores. Si están abiertas no hace nada. Si no están abiertas continua.
    - Solicita al termostato que se ponga a la temperatura deseada.
Desde que lanza la primera instrucción debe esperar a recibir respuesta para saber que hacer en el siguiente paso.

- ¿Hay algún ejercicio que te haya resultado complicado de resolver, o que no hayas podido resolver? ¿Has comprendido la solución propuesta?
A ver, tema de callbacks y promesas ya los traté en otra asignatura de FrontEnd. Lo más complicado para mi ha sido tema de generadores. Y no sé si es por eso que por ejemplo el ejercicio de Fibonacci me parece que el enunciado y la propuesta no coindicen. Para mí el enunciado pide que n sea el número de iteraciones de la función y en la propuesta n es el número límite de la serie.