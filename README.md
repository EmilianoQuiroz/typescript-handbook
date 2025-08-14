# Apuntes y notas importantes Typescript   

## Contenido: 

- Configuracion
- Tipado de datos
- Funciones
- DOM & Eventos
- Genericos
- POO - Clases & Herencia
- Interfaces
- Modulos
- Webpack
- Testing

### Que es Typescript?

        - Es un superset de javascript que incluye todas las caracteristicas de este mas algunas mejoras como el tipado estatico. Permite a los desarrolladores encontrar errores en tiempo de compilacion, lo cual agrega mas robustes a este lenguaje de programacion, especial para proyectos grandes. TypeScript se compila a JavaScript para que pueda ser ejecutado en navegadores y otros entornos compatibles con JavaScript   
### ¿Por qué usar Typescript?
        - Tipado estático: Permite detectar errores en tiempo de compilación.
        Intellisense: Proporciona información sobre los métodos y propiedades de los objetos.
        Compatibilidad: Typescript es un superconjunto de Javascript, por lo que todo el código Javascript es válido en Typescript.
        Mantenimiento: Facilita el mantenimiento de código a medida que el proyecto crece.
        Documentación: Mejora la documentación del código.
        Comunidad: Cuenta con una gran comunidad de desarrolladores.
### tsconfig.json
        
        - Este fichero nos permite controlar exactamente como queremos que se comporte nuestro proyecto typescrips.

### Tipos de datos en Typescript

        - Tenemos un tipado de datos estatico, tenemos los siguientes datos:

        - String : Cadena de textp

        - Number : Numerico 

        - Boolean : V o F

        - object : Cadena de pares claves valor

        - Array : Puede ser un array de numeros o caracteres, se crean poniendi el tipo de dato que se va a utilizar seguido de los corchetes, por ejemplo 

        $ let numero:number[]

        - any : No especifica ningun tipo de dato. No utilizar nunca

### Otros tipos de datos en Typescript

        - Podemos asignar a una variables mas de un tipo de dato, en el siguiente ejemplo, la variable "id" podria ser de tipo number o de tipo string.

        $ let id: number | string = 12343

        - Podemos crear tipos de datos personalizados. En el siguiente ejemplo creamos el tipo de dato id y le decimos que puede ser de tipo numerico o caracter.

        $ type id = number | string;
        $ let identificador:id = 1234

        - Podemos asignar tipos de datos a objetos (muy utilizado para las props en una funcion)
        
                $ type movie = {
                        titulo: string,
                        duracion: number,
                        ganoUnOscar: boolean
                }
        
        - Tambien podemos asignar tipos de datos a Arrays y a su ves les podemos dar varios tipos de datos:

                $ let myArr: ( number | srting | boolean)[] = [10, false, "name" ]; 
        
        - En este caso le asignamos a la varianle myArr un tipo  number, string o boolean

        - Tipo literal: Es un tipo al que solo le podremos asignar un estado especifico

                $ type stateLoading = "Loading...";

        En este caso el tipo stateLoading siempre contendra el valor "Loading"

        - Intersection: Nos permite obtener todas las caracteristicas de uno o mas tipos y asignarselas a otro, EJ:
                
                - Tenemos el tipo book y el tipo movie, ambos con sus caracterirticas

                $ type book = {
                        title: string,
                        pages: number,
                }

                type movie = {
                        title: string,
                        duration: number,
                        hasOscar: boolean
                }

                - En este caso creamos un tipo que contiene todas las caracteristicas de book y de movie

                $ type book adaptation = movie & book

### Elementos del DOM

## Como podemos acceder a los elementos del DOM?

        - Queryselector

### Genericos

        - En TypeScript, los genéricos son una característica que permite crear código reutilizable y seguro para tipos. Permiten definir funciones, clases o interfaces que pueden operar con diferentes tipos de datos, sin perder la seguridad de tipos. En lugar de especificar un tipo concreto (como number o string), se utiliza un marcador de posición (un tipo genérico, como T) que puede ser reemplazado por cualquier tipo cuando se utiliza el código. 
        ¿Cómo funcionan?
        Imagina que necesitas una función que simplemente devuelva el valor que recibe. Podrías escribir una función para cada tipo de dato: function identityNumber(arg: number): number { return arg; } y function identityString(arg: string): string { return arg; }. Sin embargo, esto es repetitivo y poco eficiente. Los genéricos permiten crear una función que funcione con cualquier tipo de dato: 

        $function identity<T>(arg: T): T {
        return arg;
        }

        let myString = identity<string>("hello");
        let myNumber = identity<number>(10);

        - En este ejemplo, <T> define un tipo genérico llamado T. Al llamar a la función identity, se especifica el tipo concreto que se utilizará para T. TypeScript inferirá el tipo si no se especifica explícitamente, como en el caso de myNumber donde el tipo number se deduce del valor pasado como argumento. 

### Clases

        - En TypeScript, las clases son plantillas para crear objetos, encapsulando datos (propiedades) y comportamiento (métodos) relacionados.
        - Cuando las clases tienen funciones dentro de si las llamamos metodos 
        - Las clases pueden tener propiedades publicas o privadas, a las publicas podemos acceder por fuera de la clase y tambien la podemos modificar, a las privadas no       
        - En estas clases las constantes son llamadas readonly, a las cuales se pueden acceder por fuera de la clase pero no pueden ser modificadas

        -- Características principales de las clases en TypeScript:
                - Definición: Se crean usando la palabra clave class seguida del nombre de la clase y un bloque de código que contiene las propiedades y métodos. 
                - Propiedades: Son variables dentro de la clase que almacenan datos. 
                - Métodos: Son funciones dentro de la clase que definen el comportamiento del objeto. 
                - Constructores: Son métodos especiales que se ejecutan al crear una nueva instancia de la clase y permiten inicializar las propiedades del objeto. 
                - Herencia: Las clases pueden extenderse de otras clases usando la palabra clave extends, permitiendo la reutilización de código y la creación de jerarquías de clases. 
                - Modificadores de acceso: TypeScript permite controlar el acceso a las propiedades y métodos usando public, private y protected. 
                - Miembros estáticos: Son propiedades o métodos que pertenecen a la clase en sí misma, no a instancias individuales, y se definen con la palabra clave static. 
        -- Ejemplo básico:

        $ class Persona {
        nombre: string;
        edad: number;

        constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
        }

        saludar(): void {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
        }
        }

        const persona1 = new Persona("Juan", 30);
        persona1.saludar(); // Output: Hola, me llamo Juan y tengo 30 años.

### Interfaces

        - En TypeScript, una interfaz es una estructura que define la forma o el tipo de un objeto. Define las propiedades y métodos que un objeto debe tener, pero no proporciona la implementación de esos métodos. Sirve como un contrato o especificación que otros objetos deben cumplir. 
        - Características principales de las interfaces en TypeScript:
        - Definición de tipos:
        - Las interfaces permiten definir tipos personalizados para objetos, especificando qué propiedades y métodos deben tener. 
        - Contrato:
        - Una interfaz establece un acuerdo o contrato que los objetos deben cumplir para ser considerados del tipo definido por la interfaz. 
        - Comprobación de tipos:
        - TypeScript utiliza las interfaces para realizar comprobaciones de tipos en tiempo de compilación, ayudando a detectar errores relacionados con la estructura de los objetos. 
        - Flexibilidad:
        - Las interfaces pueden ser implementadas por clases, objetos literales o incluso por otras interfaces, lo que proporciona flexibilidad en la forma de definir y utilizar los tipos. 
        - Ejemplo:

        $interface Persona {
        nombre: string;
        edad: number;
        direccion?: string; // Propiedad opcional
        }      

        - En este ejemplo, la interfaz Persona define la estructura de un objeto persona con las propiedades nombre (obligatoria) y edad (obligatoria), y direccion (opcional)

### Cual es la diferencia enrtre una interface y yn type?

        - En TypeScript, tanto interface como type se utilizan para definir tipos de datos, pero tienen diferencias clave en cómo se pueden usar y en su comportamiento. interface se utiliza principalmente para definir la forma de objetos y contratos de clase, permitiendo la herencia y la declaración de múltiples veces (merging de declaraciones). type, por otro lado, se usa para crear alias de tipos, incluyendo tipos primitivos, uniones, intersecciones y tipos complejos. 

        - interface:
        - Definición de formas de objetos: interface se usa para describir la estructura de un objeto, especificando sus propiedades y sus tipos.
        - Herencia: Permite la herencia, extendiendo la definición de una interfaz existente.
        - Declaración de múltiples veces (merging): Se pueden declarar múltiples interfaces con el mismo nombre, y TypeScript las combinará en una sola interfaz.
        - No puede definir tipos primitivos: No se puede usar interface para definir un alias para un tipo primitivo como number o string.

        - type:
        - Alias de tipos: Crea un alias para cualquier tipo de datos, incluyendo tipos primitivos, objetos, uniones, intersecciones, etc.
        - Uniones e Intersecciones: Permite definir tipos que son la unión o intersección de otros tipos.
        - No permite merging: No se pueden declarar múltiples veces con el mismo nombre.

        - ¿Cuándo usar cada uno?  
                - interface:
                - Cuando se necesita definir la forma de objetos o contratos de clase.
                - Cuando se espera extender o heredar de la definición de un tipo.
                - Cuando se necesita la funcionalidad de merging de declaraciones.
                - type:
                - Cuando se necesita crear alias para tipos primitivos, tuplas o tipos complejos como uniones o intersecciones.
                - Cuando se necesita un control más preciso sobre la definición del tipo.
                - Cuando no se necesita la funcionalidad de merging. 

### Modulos import/export

        -  En TypeScript, un "implementar interface" (o "implements interface") se refiere al uso de la palabra clave implements para que una clase cumpla con la estructura definida por una interfaz. Una interfaz en TypeScript describe la forma de un objeto, especificando qué propiedades y métodos debe tener, pero no proporciona la implementación de esos métodos. Cuando una clase implementa una interfaz, está obligada a proporcionar una implementación para cada propiedad y método declarado en la interfaz. 
        - En resumen:
        - Interfaz:
        - Define un contrato o estructura que indica qué propiedades y métodos debe tener un objeto.
        - Implementar:
        - Una clase usa la palabra clave implements para indicar que cumple con la estructura definida por una interfaz.
        - Obligación:
        - Si una clase implementa una interfaz, debe proporcionar implementaciones para todas las propiedades y métodos declarados en esa interfaz. 
        - Ejemplo:

        $interface Animal {
        name: string;
        makeSound(): void;
        }

        class Dog implements Animal {
        name: string;
        constructor(name: string) {
          this.name = name;
        }
        makeSound() {
        console.log("Woof!");
        }
        }

        let myDog: Animal = new Dog("Buddy");
        myDog.makeSound(); // Output: Woof!

### Modulos en Typescript

        -- En TypeScript, los módulos son archivos que encapsulan código relacionado, permitiendo la organización y reutilización del mismo. Cada módulo tiene su propio ámbito, lo que significa que las variables, funciones y clases declaradas dentro de un módulo no son accesibles globalmente a menos que se exporten explícitamente. Los módulos se utilizan para dividir el código en partes más pequeñas y manejables, mejorando la estructura y mantenibilidad del proyecto. 
        - ¿Qué son los módulos en TypeScript?
        - Encapsulación de código:
        - Los módulos son archivos que contienen código relacionado, como funciones, clases, interfaces y tipos de datos. 
        - Ámbito propio:
        - Cada módulo tiene su propio ámbito, lo que significa que las variables y funciones dentro de un módulo no son visibles fuera de él a menos que se exporten explícitamente. 
        - Reutilización de código:
        - Los módulos permiten la reutilización de código al exportar elementos que pueden ser importados y utilizados en otros módulos. 
        - Organización del código:
        - Los módulos facilitan la organización del código al dividirlo en partes lógicas y manejables, mejorando la estructura y mantenibilidad del proyecto. 
        - Separación de responsabilidades:
        - Cada módulo puede estar dedicado a una funcionalidad específica, lo que ayuda a mantener la claridad y la estructura del código. 
        - Importación y exportación:
        - Para utilizar elementos de un módulo en otro, es necesario exportarlos desde el módulo original e importarlos en el módulo donde se van a utilizar. 

 ### Webpack

        - Webpack es un empaquetador de módulos (module bundler) para JavaScript, diseñado para optimizar el desarrollo de aplicaciones web, especialmente en proyectos grandes. Funciona como una herramienta que agrupa todos los archivos JavaScript y otros recursos (como CSS, imágenes, etc.) en un conjunto optimizado para el navegador, reduciendo el número de archivos y mejorando el rendimiento de la aplicación. 
        En esencia, Webpack toma todos los archivos de tu proyecto, analiza sus dependencias, y los combina en un número reducido de archivos (llamados bundles) que pueden ser cargados de manera eficiente por el navegador. 
        - ¿Para qué sirve Webpack?
        - Optimización del rendimiento:
        - Al reducir la cantidad de archivos que el navegador necesita descargar, Webpack ayuda a que la aplicación web cargue más rápido. 
        - Gestión de dependencias:
        - Webpack maneja las dependencias entre los diferentes módulos de tu código, asegurando que se carguen en el orden correcto. 
        - Soporte para diferentes formatos:
        - Webpack puede trabajar con diversos tipos de archivos, incluyendo JavaScript, CSS, HTML, imágenes y más, gracias a los loaders y plugins. 
        - Desarrollo moderno:
        - Webpack facilita el uso de tecnologías y estándares modernos de JavaScript, como ES6, y preprocesadores como Sass o Less, transformando el código a uno compatible con todos los navegadores. 
        - Soporte para frameworks:
        - Webpack es compatible con frameworks populares como Angular, React y Vue, ayudando a optimizar sus aplicaciones. 

### Tesing con Jest

        - ¿Qué es Jest?
        - Framework de pruebas:
        - Jest es un framework completo para escribir, ejecutar y analizar pruebas en proyectos JavaScript. 
        - Fácil de usar:
        - Está diseñado para ser fácil de usar, con una API accesible y resultados rápidos. 
        - Ampliable:
        - Jest es altamente configurable y extensible, lo que permite adaptarlo a diferentes necesidades. 
        - Soporte para diferentes tecnologías:
        - Funciona con código JavaScript, TypeScript, y se integra con herramientas como Babel, webpack, etc. 
        - Pruebas unitarias:
        - Jest es especialmente popular para pruebas unitarias, donde se prueba cada componente o función de forma aislada. 
        - Mocking:
        - Permite crear mocks o imitaciones de funciones y objetos para aislar el código que se está probando. 
        - Cobertura de código:
        - Genera informes de cobertura de código para mostrar qué porcentaje del código está cubierto por las pruebas. 

### EVENTOS en HTML

        - En HTML, un evento es una acción o ocurrencia que sucede en el navegador y puede ser detectada por el código JavaScript. Estos eventos pueden ser generados por el usuario (como clics, movimientos del mouse, pulsaciones de teclas) o por el propio navegador (como la carga de una página). Al asociar funciones JavaScript a estos eventos, se puede crear interactividad en las páginas web, respondiendo a las acciones del usuario o a cambios en el estado del documento. 
        - ¿Qué son los eventos en detalle?
        - Acciones y ocurrencias:
        - Los eventos son señales de que algo ha sucedido en el entorno del navegador. 
        - Tipos de eventos:
        - Existen diversos tipos de eventos, como eventos de ratón (clics, movimientos, etc.), eventos de teclado, eventos de formulario, eventos de carga de página, etc. 
        - Manejo de eventos:
        - JavaScript permite asociar funciones (llamadas manejadores de eventos) a eventos específicos. Cuando un evento ocurre, se ejecuta el manejador asociado, permitiendo que el código JavaScript reaccione y realice ciertas acciones. 
        - Ejemplos:
        - Un evento de clic en un botón puede mostrar un mensaje al usuario.
        - Un evento de cambio en un campo de texto puede validar la entrada del usuario.
        - Un evento de carga de página puede iniciar una animación.
        - Un evento de desplazamiento puede hacer que ciertos elementos aparezcan o desaparezcan. 
        - Atributos de eventos:
        - En HTML, los eventos se pueden definir directamente en las etiquetas HTML mediante atributos especiales como onclick, onmouseover, onload, etc. 
        - Objetos de evento:
        - Cuando un evento se dispara, se crea un objeto de evento que contiene información relevante sobre el evento, como las coordenadas del mouse, la tecla presionada, etc. 
        - En resumen: Los eventos son la base de la interactividad en las páginas web, permitiendo que JavaScript responda a las acciones del usuario y a los cambios en el entorno del navegador para crear experiencias dinámicas e interactivas. 