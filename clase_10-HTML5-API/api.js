/*
INTRODUCCIÓN A JAVASCRIPT

Variables
    Son contenedores para datos.
    
        var miVariable = valor

Tipos de datos
    Number     (se usan para cálculos)  
    String     (siempre entre comillas)
    Boolean    (true y false)

Condicionales
    
    if(condicion) {
        // codigo si la condicion es verdadera
    } else {
        // codigo si la condicion es falsa
    }

Funciones
    Se usan para encerrar porciones de código con
    una utilidad específica.

    function miFuncion(){
        // codigo de la funcion
    }

    Dentro de los paréntesis pueden ir parámetros separados por comas. Los parámetros son valores que manipulará la función.

        function miFuncion(a,b){
            alert(a + b);
        }

        miFuncion(5,9)  // 14

Objetos
    Son conjuntos de pares de clave: valor. 

        var miObjeto = {
            clave1: valor1,
            clave2: valor2,
            clave3: valor3,
            clave4: valor4
        }

        var miCarro = {
            color: "rojo",
            year: 2015,
            marca: "Volvo",
            tipo: "Camioneta",
            propio: true,
            arrancar: function(){
                alert("he arrancado");
            }
        }
    
    Cuando un valor es un tipo de dato se habla de "propiedad". Pero cuando un valor es una funcion, se habla de "método".

    Se accede a los métodos y propiedades
        objeto.propiedad
        objeto.metodo()

        Por ejemplo:

            alert(miCarro.color) // "rojo";
            alert(miCarro.year)  // 2015
            micarro.arrancar() // alert: "he arrancado"

Eventos
    Un evento es cualquier cosa que ocurre en la aplicación. 
    Para reaccionar a un evento, la sintaxis JS es la siguiente (en seudo código):

        elementoHTML.addEventListener('evento',funcion)

*/

var titulo = document.getElementById('titulo');

titulo.addEventListener('click', clickTitulo);

function clickTitulo(){
    alert("he hecho click en el titulo");
}

/*
RECURSOS PARA CONOCER LA API DE HTML5

Can I Use
    http://caniuse.com/

MDN
    https://developer.mozilla.org/es/docs/WebAPI

W3 Schools
    http://www.w3schools.com/jsref/



*/
