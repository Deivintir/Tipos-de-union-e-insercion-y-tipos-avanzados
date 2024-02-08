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

/**Tipado de funciones:
 * Hasta ahora hemos aprendido el tipado estático de variables y constantes en TypeScript, pero no menos importante que este mecanismo es el tipado de funciones, que aporta las mismas
 * ventajas en cuanto a desarrollo y robustez de los programas; en este caso, para los parámetros de las funciones y su retorno.
 * Su sintaxis mantiene también el uso del signo de dos puntos; en este caso, situado tras cada parámetro y después de los paréntesis para el retorno de la función.
 * function identificador (param1:tipo, param2:tipo,...):tipo{
 *      codigo de la función
 * }
 * Ejemplo: */
function add(op1: number, op2:number):number{
    return op1 + op2;
}
console.log('El resultado es ' +add(12,13));
/**El tipado de funciones se puede emplear en cualquiera de las formas usadas en JavaScript: funcioens de expresión, anónimas como callback, autoinvocadas, etc. Podemos comprobarlo con
 * este ejemplo: */
const multiply = (op1: number,op2: number):number => op1 * op2;
console.log("El resultado es "+ multiply(2,3));

const divide = (op1: number, op2: number): number => op1/op2;
console.log('El resultado es ' + divide(6,2));
/**También puede haber uso de funciones que no retornan ningún valor; para esos casos, TypeScript incorpora el tipo "void", que existe en otros muchos lenguajes de programación. Por ejemplo,
 * podemos añadir la siguiente función para comprobar este tipo: */
function setMessage (text: string, userName: string): void{
    console.log(text + ' ' + userName);
}
/**Otra de las ventajas que aporta TypeScript respecto a las funciones son los parámetros opcionales, que, como su nombre indica, permiten que para algunos de los parámetros decladaos no sea
 * obligatorio incluir su argumento en la invocación de las funciones, lo que evita implementar en el cuerpo la lógica para resolver qué ocurre si un argumento no es introducido.
 * Antes de que se implementara esta funcionalidad de TypeScript, si necesitábamos parámetros opcionales debían escribirse como en el siguiente código: */
function division(op1,op2){
    if(!arguments[1]){
        throw new Error('Operandos no válidos.');
    }
    return op1/op2;
}
console.log(division(3,1));//Para comprobar el error pasar un solo parámetro.
/**Por tanto, necesitábamos introducir una lógica que leyera si alguno de los argumentos, disponibles en el array "arguments", tenía el valor "undefined" para en ese caso devolver un error,
 * que será lo que aparecerá en nuestro navegador. 
 * En cambio, con los parámetros opcionales en TypeScript simplemente tenemos que añadir el operador "?"; de esta manera, el transpilador lo considera opcional.*/

function division2 (op1: number, op2? : number): number{
    if(!op2){
        throw new Error('Operandos no válidos.');
    }
    return op1/op2;
}
console.log(division2(3,1));//Para comprobar el error pasar un solo parámetro.
/**Lógicamente, si en una función disponemos de una mezcla de parámetros obligatorios y opcionales, los opcionales deberán situarse después de los obligatorios para que, en el orden de 
 * ejecución en la incocación, sean los primeros que lea el intérprete.
 * Ejemplo: */

function setMessage(text?: string, userName: string):void{
    console.log(text + ' ' + userName);
}
/**En este caso, al grabar y transpilar, la terminal y el linter nos indican el error, ya que el parámetro "userName", al ser obligatorio, no podrá estar tras un parámetro opcional. */

/**Tipado de "enum":
 * TypeScript incorpora a JavaScript una característica común en los lenguajes de programación orientados a objetos, los "enum" o tipos enumerados. Su sintaxis usa la palabra "enum" y,
 * entre llaves, la enumeración de tipos con o sin valor o expresión asignada. 
 * enum Identificador {
 *      Constante1 = expresion1,
 *      Constante2 = expresion2,
 *      ...
 * }
 * Su empleo es el mismo que en otros lenguajes: proporcionar un conjunto de valores que pueden ser asignados a los elementos que obtienen este tipo. En el caso concreeto de TypeScript, 
 * en el que disponemos de tipos de unión complejos (como vimos en el apartado anterior), la utilidad de los "enum" puede ampliarse mediante la asignación a sus constantes de valores
 * que en el futuro puedan cambiar.
 * Por ejemplo:*/
enum Tags{
    Man = 'hombre',
    Woman = 'mujer',
    Boy = 'niño',
    Girl = 'niña',
}
let ecommerceTags: Tags;
ecommerceTags = Tags.Boy;
console.log(ecommerceTags); //Imprimirá 'niño'.
/**En el ejemplo anterior, si en el futuro se quieren cambiar los valores de la constantes del "enum" por otras, no será necesario modificar los mismos en las asignaciones del programa
 * ya que tomarán los nuevos valores directamente. */

/**Tipado de métodos, propiedades y clases globales de JavaScript:
 * Como se detalló anteriormente, el tipado estático en TypeScript no solo recibe tipos primitivos de JavaScript o los tipos-valor indicados anteriormente; en realidad, puede recibir
 * cualquier especificación que necesit4emos como desarrolladores.
 * Por este motivo, una particularidad a veces desconocida de TypeScript es que permite implementar tipos a partir de clases globales de JavaScript, ampliando la funcionalidad de este 
 * superset. Hay un caso de uso especialmente interesante de la clase globarl "Date" (recordemos que JavaScript permite implementar una colección de métodos y propiedades para trabajar
 * con fechas).
 * Podemos aplicar un tipado con esa clase a una variable en TypesCript para especificar que los valores que hay que almacenar son fechas.
 * Por ejemplo: */
let birthDate: Date;
//birthDate = '11-12-1986'; <- Esto lanzará un error, ya que asignamos un valor tipo string a una variable que espera un objeto de clase "Date".
/**En cambio, si asignamos a la variable una instancia de "Date", TypeScript no lanzará ningún error y la asignación será totalmente correcta.
 * No obstante, no podemos perder de vista que el tipo de variable será un objeto, ya que no existen los tipos de fecha como taes en el lenguaje JavaScript. Podemos sustituir el código
 * por el siguiente: */
birthDate = new Date(1984,10,29,7,0,0,0);
console.log(typeof birthDate)// El tipo de dato será objeto.
/**Por tanto, la utilidad de este mecanismo, radica, más que en el tipo de dato que tendrá la variable, en que los valores que reciba sean objetos de una clase para así garantizar
 * que las subsiguientes instrucciones puedan usar métodos y propiedades de esa clase y no provocar errores. En este mismo caso, podemos aplicar métodos de fechas a la variable 
 * "birthDate" añadiendo las siguientes instrucciones: */
const weekDays = [
    'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 
];
let message: string = `Usted nació en ${weekDays[birthDate.getDay()]}`;
console.log(message);
/**Recordemos que el tipado estático se produce en tiempo de desarrollo; por tanto, los errores que detecta TypeScript serán depurados antes de la transpilación a JavaScript. Sin embargo,
 * esta circunstancia, unida a los editores de código como VSC, nos vuelve a proporcionar una poderosa herramienta de ayuda en el desarrollo de la que hasta ahora no disponíamos en
 * JavaScript.
 * Por ejemplo, en el caso anterior, cuando usamos la notación del punto en la variable "birthDate", al estar tipada como "Date", se desplegarán los métodos y propiedades de esta clase.
 * En este sentido, con los tipos primitivos también se despliegan las ayudas de métodos y propiedades existentes en JavaScript para cada uno de ellos, especialmente para "string" y "numbers"
 * Ejemplo: */
let city: string;
city = 'Nueva York';
city = city.length > 20 ? 'Demasiados caracteres': city;
console.log(city);
/**En este caso, también podemos comprobar que se despliega la ayuda para propiedades y métodos de "string" en el caso de la variable "city", reduciendo de esta manera los errores sintácticos
 * y proporcionando un desarrollo ágil y eficiente. */

/**Tipado de genéricos:
 * Continuando con las funcionalidades que implementa TypesCript, otro mecanismo común en lenguajes de programación es el tipado mediante genéricos, que se aplica a las funciones o métodos con 
 * el fin de definir el tipo de dato en cada invocación de la función; para ello usa la sintaxis "<T>".
 * Ejemplo: */
function setResult<T> (result: T):any{
    if(typeof result === 'number'){
        return result >= 5 ? 'APTO': 'NO APTO';
    }else{
        return result;
    }
}
const result1 = setResult<string> ('APTO');
const result2 = setResult<number> (7);
/**Aquí podemos observar que la función "setResult" recibe la sintaxis <T>, lo que permite que la representación de este tipo "T" pueda ser asignada al parámetro de la función "result", que 
 * de esta manera tendrá el tipo que se defina en la invocación de la función.
 * Por este motivo, podemos comprobar que en la invocación de la función podemos usar, de nuevo estos símbolos < y >, el tipo definitivo que tendrá en esa invocación el argumento; en este 
 * ejemplo, una vez con "string" y la otra con "number".
 * Es cierto que el ejemplo anterior se podría haber solucionado con un tipo de unión, por lo que el caso de uso más frecuente es el de tipos complejos como interfaces o clases definidas
 * por el desarrollador, que, como veremos más adelante, son introducidas en funciones con tipo genérico declaradas en librerías o módulos externos al programa. */

