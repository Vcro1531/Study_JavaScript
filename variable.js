//1. Use strict
//add in ES5
//use this for Vanila JavaScript
'use strict';

//2. Variable
//let (added in ES6)
//Mutable type
let globalName = 'global name';
{
    let name = 'jimin';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);//Bloock Scope 안에서 let name을 선언했기 때문에 출력 X
console.log(globalName);

//var (요즘은 안씀)
//var hoisting (어디에 선언했느냐와 상관없이 항상 선언을 제일 위로 끌어올림)
//var는 Bloock Scope가 없음
{
    age = 4;
    var age;
}
console.log(age)// 4

//3. Constant
//Immutable type, Good reasons : 
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item: number, string, boolean, null, undefinedn, symbol
//object, box container
//function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`); 

//number - speicla numeric values: infinity, -infinity, Nat a Number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(NaN);

//string
const char = 'c';
const myname = 'jimin';
const greeting = 'hello' + name;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const hello = `hi ${myname}!` //template literals (string)

console.log(`value: ${hello}, type: ${typeof hello}`);      //같음
console.log('value: ' + hello + ' type: ' + typeof hello);  //같음

//boolean
//false: 0, null, undefined, NaN, ''
//true any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');//symbol은 동일한 string을 작성해도 다른 symbol로 만들어짐
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);    //false