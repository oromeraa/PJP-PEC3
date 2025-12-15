# Actividad 1

- Identifica y describe dos escenarios de la vida real donde haya una comunicación asíncrona. Por ejemplo, y para que te sirva de orientación, una comunicación vía WhatsApp es una comunicación asíncrona. ¿Qué otro escenario identificarías?
  
Por ejemplo en la comunicación con dispositivo inteligentes en casa. Estando en un dashboard puedes solicitar los valores de temperatura de un sensor pero no te bloquea el programa, simplemente cuando te llegue lo actualizarás en el dashboard. Y si por el contrario activas por ejemplo una persiana, no esperas a que levante la persiana, simplemente cuando acabe de hacerlo te llegará el aviso y fin.

- ¿Te has encontrado alguna vez, programando, con alguna situación donde te hayas tenido que enfrentar a un escenario asíncrono? Describe la situación. Si no lo has hecho, describe un escenario donde identifiques una comunicación asíncrona en un entorno de desarrollo. Se valorará positivamente la originalidad en las respuestas.

Pues en mi trabajo, desarrollando el firmware de dispositivos sensóricos embebidos, el microcontrolador manda una instrucción de medición de un sensor optico pero sigo ejecutando mi código con normalidad. Cuando el sensor termina, éste activa una señal de interrupción que la recibe el microcontrolador y lee el dato medido.

- ¿Hay algún ejercicio que te haya resultado complicado de resolver, o que no hayas podido resolver? ¿Has comprendido la solución propuesta?
El concepto event loop me ha sorprendido, no lo conocía. Curioso comportamiento. Sobre todo en el ejercicio 4, para nada esperaba ese comportamiento. git 