### Lenguaje TypeScript acotado al paradigma de programación estructuradi y analisis en sus cuatro componentes de un paradigma de  Kuhn:

## Generalizaciones simbolicas: 
Las reglas o sintaxis de typescript acotado al paradima de programacion estructurado que se pueden enumerar son: 
 - Secuencia de instruccion una a una y de arriba a abajo.
 - Estructuras de control como: if,else, switch.
 - Estructuras de iteracion como: for, while,do-while. 
 - Utilizar "{}" y "()" para cada funcion. Y usar la palabras reservadas como: function,let,const,etc. 
 - Anotaciones de tipo en parametros ej: (: number, : string,etc) 
 - Uniones en parametros: ej:(let dato: string | boolean )
 - Colocar ":Promise<tipo_de_dato>", a las funciones asincronicas aunque sea void.

Algunas de las buenas practicas: uso de tipos genericos "T" en funciones e interfaces. Restringir los genericos con extends. Mapear tipos 

## Que caracteristicas particulares que se creen que son mejores que otros lenguajes:
 - Tipado estructural: Un objeto es compatible si tiene la misma forma/estructura sin importar el nombre o su clase.
 - Superset de JS: Todo codigo Js es valido en TS.
 - Atrapa errores antes de ejecutar ya que compila.
 - Codigo autodocumentado ya que si una funcion retorna algo se debe colocar el tipo de dato que retorna.
 - Restringe los tipos de datos ej: let dato: "P" | "E" | "T" | "C";

## Valores, que se considera un buen programa:
- Debe ser legible y claro.
- Modalización y reutilización de funciones.
- Simplicidad, es decir evitar complejidad.
- Que sea facil de mantener y que haya facilidad para modificar.
- Correccion y seguridad de tipos: que el programa funcione y que la definicion de tipos ayude a su funcionamiento.
- Flujo de control claro, es decir (sin goto).

## Ejemplares: Los problemas a ser resueltos basicos:
- Calculadora, lista de tareas, menu con switchs y validacion de entrada.
- Algoritmos clásicos: ordenamiento de burbuja, búsqueda,factorial, Fibonacci,etc.