// Vamos das as boas vindas.
// Formas de comentar em JS

// Usamos // para comentar um linha.

// Usamos "/* */" para comentar mais de uma linha 

/* Exemplo:
O pé do padre Pedro é Preto. */

// window.alert("Fala galera! Vamos lançar o nosso Hellow World!")

// window.confirm("Têm certeza disso?")

// window.prompt("Qual o seu nome?")

// Testando o JS no Console

console.log("Tudo certo, o JS está funfando.")

// TIPOS DE DADOS:
/* É a forma de CLASSIFICAR UM DADO. Todo dado vai ter um tipo. Os mais comuns são:
* NUMBER
* STRING
* BOOLEAN
* EMPTY VALUES (NULL, UNDEFINED)  

    == TIPO NUMBER == 

    * Number é o tipo de dado para valores numéricos;
    * Em JS todos os números são considerados Number;
    * Sejam eles: inteiros, flutuantes (quebrados) ou negativos;
    * Alguns exemplos: 10, 2.5, -12;
    * Note que nas linguagens de programação as casas decimais são após o ponto. (15.8);
    * Em JS o operador typeof, exibe o tipo de dado.
    
    VAMOS PARA PRÁTICA*/

// 1 - NUMBER
console.log(2); // Para "printar" números no console não precisamos das aspas, ou crases.
console.log(typeof 2); // number
console.log(typeof -20);
console.log(typeof 15.8);

/* == OPERAÇÕES ARITMETICAS ==
* Podemos realizar operações aritmeticas na programação;
* Operadores como: +, -, *, /, podem ser utilizados;
* Veja o um exemplo: console.log(2 + 5);
* A ordem matemática também deve ser respeitada: cosole.log(5 + (4 * 12));
* Vamos para prática. */

// 2 - OP. ARITMETICA
console.log(2 + 5);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);
console.log(5 * (5 + 3));

/* == Special Numbers ==
 ● Special Numbers são dados considerados como 
     números, mas não funcionam como eles;
 ● Eles são:
     ○ Infinity;
     ○-Infinity;
     ○ NaN (Not  a Number);
 ● Algumas operações podem resultar nestes valores;
 ● Vamos ver na prática*/

// 3 - SPECIAL NUMBERS
console.log(typeof Infinity);

console.log(12 * 'asd');

console.log(typeof NaN);

/* == Strings ==
● Strings são textos;
● Em JavaScript temos três formas de criar dados de 
    texto;
● Aspas simples, duplas e crases;
● Desta maneira: console.log(“teste”);
● O “efeito final” é o mesmo, mas cada um destes 
    recursos tem particularidades*/

// 4 - STRINGS
console.log('Um texto qualquer.');
console.log("Mais um texto escrito de forma diferente");
console.log(`Mais um diferente com crases.`);
console.log(typeof "olá");

/* == Mais sobre strings
  ● Uma string deve sempre começar e terminar com o mesmo caractere (“, ‘, `);
  ● Há algumas combinações de caracteres que tem efeitos interessantes nas strings;
  ● Por exemplo o \n (contra-barra), ele pula uma linha no texto;*/

// 5 - SÍMBOLOS ESPECIAIS EM STRINGS
console.log('Testando \nquebra de linha.');

console.log('Espaçamento \tde tab.');

/* == Concatenação
● Concatenação é o recurso que une dois ou mais 
    textos;
● O operador da concatenação é o +;
● Exemplo: “Meu “ + “ texto “ + “ combinado”;
● Agora o recurso pode não fazer tanto sentido, mas 
    com variáveis teremos um melhor uso para ele;
● Vamos ver na prática!*/

// 6 - CONCATENAÇÃO
console.log("Oi " + "tudo" + " bem?");
console.log('Testando ' + " Concatenação");


/* == INTERPOLAÇÃO (Template Strings) ==
* A interpolação ela é semelhante a concatenação;
* Nos possibilita escrever tudo na mesma string;
* Ela deve ser escrita `entre crases`;
* Podemos executar código JS com o placeholder ${código}.
Vamos ver na prática. */

// 7 - INTERPOLAÇÃO
console.log(`A soma de 2 + 2 é: ${2+2}`);

console.log(`Podemos executar qualquer coisa ${console.log("teste")}`);

/* == BOOLEANS ==
* Os booleans possuem apenas dois tipos de valores: true(verdadeiro) ou false(falso);
* Para qualquer tipo de comparação são utilizados os sinais: >, <, ==. Resultam em um dado booleano;
* Mais na frente vamos ver que este tipo de dado é importante para estruturas de condição e repetição.*/

// 8 - BOOLEANS
console.log(5 > 2);
console.log(30 > 100);
console.log(typeof true);

/* COMPARAÇÕES
* As comparações que podemos utilizar são:
== Maior e Menor que: > e <;
== Maior e Igual e Menor e Igual que: >= e <=;
== Igual: ==;
== Diferente !=;
== Idêntico: === */

// 9 - COMPARAÇÕES
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

console.log(10 === 10);

console.log("10" === 10);

console.log("10" == 10);

/* == COMPARAÇÃO DE IDÊNTICO
* Os operadores === e !== funcionam como o == e !=, 
porém também levam em consideração o tipo de dado.
* Estes operadores necessitam que, o tipo e o dado sejam iguais/diferentes;
* Devemos ao máximo tentar utilizar estes operadores. */

// 10 - IDÊNTICO
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != 9);

console.log(9 !== "9");

/*== OPERADORES LÓGICOS

* Os operadores lógicos sevem para unir duas ou mais comparações;
* O resultado final tabém é booleno;
* && - AND - true apenas se os dois lados forem verdadeiros.;
* || - OR - para ser true, um lado apenas é suficiente;
* ! - NOT - este operador inverte a comparação.*/

// 11 - OPERADORES LÓGICOS NA PRÁTICA
console.log(true && true);

console.log(true && false);

console.log(true || false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 || "Gustavo" === 1);

console.log(!50 > 10);


/*== EMPTY VALUES 
* Temos duas palavras reservadas que pertecem a este grupo de dados: undefined e null;
* Undefined é geralmente vista quando utilizamos um código que ainda não foi definido;
* Já o Null, costumar a ser imposto pelo programadores, para determinar que ainda não há um valor.*/

// 12 - EXEMPLOS DE EMPTY VALUES
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == false);

console.log(undefined == false);


/*== Conversão de tipo automática
* Em JS algumas operações mudam o tipo de dado, e isso ocorre de "silenciosamente".*/

// 13 - MUDANÇA AUTOMÁTICA
console.log(5 * null);

console.log("5" - 3);

console.log("5" + 1);

console.log("a" * "b");

































