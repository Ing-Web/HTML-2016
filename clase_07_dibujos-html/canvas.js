/*
Los objetos JavaScript tienen propiedades y métodos
Las propiedades son valores.
Los métodos son funciones (hacen algo).

Las propiedades definen su valor con el signo =
Los métodos trabajan con valores que se definen entre paréntesis.

Sintaxis:

objeto.propiedad = 
objeto.metodo()

Por ejemplo:

carro.puertas = 4;
carro.acelerar(100);

Por último, tenemos tres tipos de datos básicos:

1. Números, se escriben sin comillas.
2. Los strings van entre comillas
3. Los booleanos pueden ser verdadero o falso.

Ejemplo:


estudiante.nombre = "Alvaro";
estudiante.apellido = "Felipe";
estudiante.edad = 35;
estudiante.padre = true;

*/

// paso 1: obtener el canvas del html y meterlo en una variable
var canvas = document.getElementById("mycanvas");

// Paso 2: definir el contexto:
var ctx = canvas.getContext('2d');

// Paso 3: entender las coordenadas
// El punto 0,0 es el superior izquierdo del canvas. Los valores positivos en X son hacia la derecha y en Y son hacia abajo.

// Paso 4. Dibujar una línea
// Necesitamos métodos y propiedades del contexto.

// En primer lugar, definimos el punto inicial de la linea
// con .moveTo()
ctx.moveTo(250,150);
// Luego definimos el punto final de la línea con .lineTo()
ctx.lineTo(500,300);
ctx.lineTo(375,0);
ctx.lineTo(250,150);
// Luego, definimos un ancho de la linea con .lineWidth
ctx.lineWidth = 1;
ctx.strokeStyle = "red";
// Por último, invocamos a .stroke() para que se dibuje la línea
ctx.stroke();

// Para dibujar un rectángulo se usa el método
// strokeRect(x,y,w,h)

ctx.beginPath();
ctx.strokeRect(10,10,100,100);


// Para cerrar lineas y crear un polígono que tenga relleno, se usa lo siguiente:

// .closePath()   cierra los segmentos
// .fillStyle     define un color
// .fill()        dibuja el relleno

ctx.beginPath();
ctx.moveTo(200,100);
ctx.lineTo(250,100);
ctx.lineTo(250,150);
ctx.closePath();
ctx.fillStyle="yellow";
ctx.fill();
ctx.stroke();


// Los métodos siguientes dibujan las lineas y el relleno:
// .fill()    relleno
// .stroke()  lineas

// Para dibujar círculos y arcos se usa el métod .arc()
// Este método recibe cinco parámetros
// 1. El punto del centro (x,y)
// 2. El valor del radio,
// 3. El angulo inicial
// 4. El angulo final
// 5. El sentido (horario (false) o antihorario (true))

ctx.beginPath();
ctx.arc(150,200,100,0,Math.PI, true);
ctx.stroke();
ctx.font = "30px Georgia";
ctx.fillStyle = "red";
ctx.fillText('Hola mundo',10,20);