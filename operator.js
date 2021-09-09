//1. String concatenation
console.log('my' + ' cat'); //my cat
console.log('1' + 2);   //12
console.log(`string literals: 1 + 2 = ${1+2}`); //string literals: 1 + 2 = 3

//2. Numeric operators
console.log(1 + 1); //덧셈
console.log(1 - 1); //뺄셈
console.log(1 / 1); //나눗셈
console.log(1 * 1); //곱셈
console.log(5 % 2); //나머지
console.log(2 ** 3);//2의 3승

//3. Increment add decrement operators  
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);      //--도 똑같이 작동
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or)
console.log(`or: ${value1 || value2 || check()}`);  //false || false || true 이기 때문에 10번을 돌아야됨 
                                                    //value1이 true면 10번 안돌고 바로 끝

// &&(and)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0 ; i < 10 ; i++) {
        //wasting time
        console.log('bb');
    }
    return true;
};

// !(not)
console.log(`not: ${!value1}`);   //true

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);      //false
console.log(ellie1 === ellie2);     //false
console.log(ellie1 === ellie3);     //true

//8. Ternary operator: ?
//condition ? value1 : value2;
const name = 'jimin';
console.log(name === 'ellie' ? 'yes' : 'no');