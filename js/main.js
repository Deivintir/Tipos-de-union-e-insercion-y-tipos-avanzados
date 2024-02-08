/**Tipos de unión e inserción:
 * En esta unidad vamos a profundizar en el tipado estático que implementa TypeScript para mejorar el desarrollo de aplicaciones y soluciones de software con JavaScript.
 * Comenzaremos por los tipos de unión y sus alias, que amplían las posibilidades de los tipos primitivos a la hora de declarar variables y constantes en nuestros programas.
 * Posteriormente, aprenderemos de manera práctica mecanismos más complejos de tipado estático, como son los que se usan para funciones, mediante "enum" y genéricos, y con clases
 * globales propias de JavaScript.
 * Para concluir, estudiaremos de forma práctica cómo establecer el tipado de variables o constantes para arrays(una demanda recurrente de los desarrolladores con JavaScript) y también
 * para objetos literales. */
/**Tipos de unión:
 * TypeScripr implementa un mecanismo especialmente útil para aquellos programas en los que una variable o una función necesitan varios tipos primitivos o de cualquier otra clase. Se trata
 * de los llamados tipos de unión, un tipo compuesto por uno o varios tipos para determinados propósitos.
 * Su sintaxis es muy sencilla, ya que simplemente se añade el símbolo pipe(barra vertical) entre los diferentes tipos que se asignan de la siguiente manera:
 *
 * let identificador : tipo1|tipo2...
 *
 * Para la comprobación de este mecanismo y del resto de los que veremos en esta unidad aqui tienes un ejemplo:*/
var id;
id = '1245';
id = 3456;
/**Para transpilar el archivo a main.js, tecleamos en la terminal nuestro comando habitual:
 * tsc ts/main.ts --outFile js/main.js --watch
 */ 
