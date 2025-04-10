// // let  variableName = 'this variable'
// // // const is local store vairable and let and var are global variable where reuesable variable
// // console.log(variableName);

// // variableName = "arun"

// // console.log(variableName);

// // // creating a variable using var keyword
// // var name = "arun";
// // console.log(name);

// // // creating a vraible using the let keyword
// // let name = "arun";
// // console.log(name);

// // VARIABLE NAMING RULE
// // 1. variable name should be a string of characters
// // 2. the name should be unique
// // 3. the name should not be any reserved keyword
// // 4. the name must start with a character , _, &.

// // data type
// // string
// // number
// // booleans
// // null
// // undefined
// // object
// // array
// // symbol

// // Data Type : String

// // this string are character  name .

// // const sigleQuotes = 'Arun'
// // const doubleQuotes = "Arun"

// // console.log(sigleQuotes)

// // const lastName = 'joshi'
// // const backTick = `Arun, ${lastName}!, welcome `

// // console.log(backTick)

// // // this is math opreations
// // const math = `${100 -1}`
// // console.log(typeof math)

// // // Numbers

// // const WholeNumber = 2333;
// // const decimalNuber = '23.23 arun';

// // const sum = WholeNumber - decimalNuber

// // console.log(`WholeNumber ${typeof WholeNumber} this type next level, this is a decimalNuber ${  typeof decimalNuber}, and this , \n this sum of both numbers ${ typeof sum}`)

// // // Booleans

// // const isCool = true // switch false
// // console.log(typeof isCool)
// // if (!isCool) {

// //     console.log("Hi man this is boolean example")

// // } else {
// // console.log("oh, hi .. ")
// // }
// // // true - yes, coreect , 1
// // // false - no, incorrect , 0

// // const age = 20;
// // if (!age >=20) {
// //     console.log("the age are grater than 20")
// // } else {
// //    console.log("less than 20")
// // }

// // console.log(age > 23)

// // // null
// // let arun = null
// // // arun = 20
// // console.log( typeof arun)

// // // undefined

// // let x = undefined
// // console.log(x)

// // Object
// // const person = { // there is key and vlaue are decreared
// //     name: 'Arun',
// //     age: 20,
// //     isCool: true,
// //     hobbies: ['reading', 'swimming'], //this array
// // }
// // console.log(person)
// // // Dot notation
// // console.log(person.name)

// // // Array
// // const arr = [
// //     1, 3,23,.3,33,
// // ]
// // console.log(arr)

// // const date = new Date()
// // console.log(date)

// // // Statically type lang.
// // let message = "Hwllo, arun"
// // console.log( typeof message)
// // message = 123
// // console.log(typeof message)

// // javascript are Dynamically type lang.
// //  get one advance example

// // comparion Operators => true / flase

// // const a = 10;
// // const b = 12;
// // // greater than
// // console.log(a > b) // false

// // // greater than or equal to
// // console.log(a>=b)

// // //less than
// // console.log(a < b)
// // // less than or equal to
// // console.log(a <= b)

// // // is Equal
// // console.log(a == b) // false, true the opration are allow on condition of variables
// // // is Equal to and type
// // console.log(a === b) // false , true
// // // not equal
// // console.log(a != b)
// // // Strict Equality
// // console.log (a === b)
// // // Strict Inequality
// // console.log(a !== b) // false, true

// // Strict Equality
// // Compare Values and DATA TYPES
// // return true only if both are the same
// // console.log(5 === "5") // flase

// // loose Equality
// //Does'n compare DATA TYPE
// // return true if both are the same
// // console.log(5 == "5") // true

// // The Good Ones: === !===
// // The Evil Twins: == !=

// // some eg. of  Evil Twins
// // console.log('' == '0') //flase
// // console.log(0 == '') // true
// // console.log(0 == 0) // true

// // console.log(false == 'false') //false
// // console.log(false == 0) // true

// // console.log(true == 1); // true
// // console.log('5' == 5); //true

// // Logical Oprators
// // AND && => All Operands are True => true
// // console.log(true && true && true) // true
// // console.log(true && false) // false
// // console.log(false && true) // false

// // OR || => At least one oprators is true to return => True
// // console.log( true || true || false)
// // console.log(true || false)
// // console.log(false || false) // false
// // console.log(false || true || false) // true
// // console.log(false || false || false) // false
// // console.log(true || true || true) // true

// // NOT !
// // return true if false and vice versa
// // console.log(!true) // false

// // LOGIC AND CONTRAOL FLOW
// // IF STATEMRNTS
// // TRUTHY/ FALSY VAUES
// // SWITVH STATEMENTS
// // TERNARY OPRATOR

// // IF STATEMENTS
// // const age = 17;

// // if (age > 18){
// //     console.log('You are an adult')

// // }else if(age === 18){
// //     console.log('You are almost an adult')
// // }else{
// //     console.log('You are a child')
// // }

// // the "while" loop

// // let age = 0;
// // while(age < 10){
// //     console.log(age);
// //     age++;
// //     // code to be executed
// // }

// // the for loop
// // for ([initialization]; [condition], [final-expression]){
// //     // code to be executed
// // }
// // for (let i = 0; i < 10; i++) {
// //     console.log(i);
// //     // code to be executed
// // }

// // Do not pratice these type of loop
// // for (let i = 0; i < 10; ) {
// //     console.log(i);
// // }
// //  let i = 0
// // for (;; ) {
// //          console.log(i);
// //   }

// // Do not yused dry code

// // Dont repeat yourself

// // function => A block of code => Preforms a task

// // function declaration (define a function)

// // function greet(number) {
// //     return number * number
// // }
// // // A function call (calling/ executing a function)
// // // console.log(greet(5));
// // // or to store in a variable
// // const result_function = greet(5)
// // console.log(result_function);

// // A Function Declaration

// // function name(params){
// // //  statements
// // //  return value
// // //  have access to "this" keyword
// // }

// // // A function Expression
// // const name = function(params){
// //     //  statements
// //     //  return value

// // }

// // // A arrow function
// // const name = (params) => {
// //     //  statements
// //     //  return value
// // }

// // function sayHi(name, lastName){
// //     console.log(`Hello, ${name} and this my last name ${lastName}!`);
// // }
// // sayHi("Tai"); // Hello, Arun!
// // sayHi("Tai", "lung"); // Hello, tai and this my last lung

// // Return Undefined

// // function add(a, b){
// //     return "the frist return are return the frist value other return on one single function do not return other returns"
// //     return a + b
// // }

// // const sum = add(2,3.4)
// // console.log(sum); // 5.4

// //  Arrow Function
// const same = (Number) => {
//     return Number * Number;
//   };
  
//   const result_sum_arrow_function = same(10);
//   console.log(result_sum_arrow_function); // 100
  
  
//   const withOut_return_and_Bracket = (Number) => Number * Number
  
//   const result_sum_arrow_function_without_return_and_bracket = withOut_return_and_Bracket(10)
//   console.log(result_sum_arrow_function_without_return_and_bracket); // 100
  
  
  
//   // if only one parameter are contaoin on arrow function then remove the the perathensis for example 
  
//   const tai = tai => tai + tai
  
//   const name = tai(2, 2)
//   console.log(name); // 4
  
  
  
  
//   const lung = (tai, lung ) => tai + lung
//   //  on this case the parameter are already define os call this other wise no function it for example this 
//   const arun = dai(2, 2)
//   console.log(arun); // 4

