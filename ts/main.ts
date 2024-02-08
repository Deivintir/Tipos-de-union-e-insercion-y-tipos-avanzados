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

let id: string|number;
id = '1245';
id = 3456;
/**Para transpilar el archivo a main.js, tecleamos en la terminal nuestro comando habitual:
 * tsc ts/main.ts --outFile js/main.js --watch
 * La terminal no devolverá ningún error, ya que los valores asignados a la varibale "id" cumplen con el tipo de unión, pues este permite tanto "string" como "number". */

/**Alias de tipos:
 * Cuando disponemos de un tipo o, mas comúnmente, una combinación de tipos que serán usados frecuentemente en el programa, TypeScript proporciona una funcionalidad de tipos
 * llamada alias de tipos. En ella, como su nombre indica, se puede asignar un identificador que posteriormente será usado en la sintaxis de declaración que use ese tipado.
 * Ejemplo: */
type name = string|number;
let name1 : name;
let name2 : name;

name1 = '386';
name1 = 386;
name2 = 486;
name2 = '486';
/**Ahora estamos creando un alias con el nombre "name" que implementará el tipo de unión con "string" y "number" para declarar a continuación dos variables, "name1" y "name2",
 * que usan ese alias como tipo. Esto nos permite que ambas variables puedan tener valores con tipo "string" y "number", como se puede comprobar en las asignaciones posteriores. 
 * Los tipos de unión en alias también pueden usar valores en su declaración, lo que permitirá que las variables puedan tomar solamente un de los valores disponibles.
 * Estos tipos de unión se denominan complejos. Por ejemplo:*/
type dogBreeds = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';
let tobybreed: dogBreeds = 'Pastor Alemán';
/**Podemos comprobar que, si a la variable tipada con el tipo "dogBreeds" no se le asigna uno de los valores permitidos, se produce un error.
 * Además, en VSC esta implementación permite lanzar las ayudas para el desarrollo: al asignar un valor, el editor desplegará una ventana con las opciones disponibles. */