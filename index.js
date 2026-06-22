"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable declaration - Explicit (Defining) types.
let name = 'Ajmal';
let age = 18;
var isStudent = false;
name = 'Fathima';
age = 15;
isStudent = true;
//console.log(`name: ${name}, age: ${age}, student: ${isStudent}`);
// Infer (Implicit) types. TS automatically sets the data type of the variable.
let designation = 'Manager';
// designation = 13245; ❌
//Union Types - A variable can have multiple types.
//eg: API response can be 1 or 'd1';
let id;
id = 123;
id = 'e1c33435e';
//id = false; ❌
//Array declaration
let students = [6, 2, 9];
//console.log(students);
const names = ['Faris', 'Muneer', 'Zuhair'];
names.push('Swalih');
//console.log(names);
let results = [true, false];
//console.log(results);
//mixed array
let data = [
    'Ahmed',
    true
];
//console.log(data);
//Object declaration
let student = {
    name: 'Zuhair',
    age: 26
}; // There will be error if we didn't assign values to any of the keys of the object.
//console.log(student);
let child = {
    name: 'Zuhair',
};
const player1 = {
    name: 'Messi',
    age: 35
};
const player2 = {
    name: 'Cristiano',
    age: 40
};
const player3 = {
    name: 'Neymar',
    age: 27
};
console.log(player1);
console.log(`${player1.name} \n${player2.age} \n${player3.name}`);
const customer1 = {
    name: 'Lana',
    price: 220,
    paid: true
};
const customer2 = {
    price: 300,
    paid: false,
    name: 'Nahila'
};
const customer3 = {
    paid: true,
    price: 500,
    name: 'Uvais'
};
const paymentStatus = 'Paid';
//Function declaration
function add(a, b) {
    return a + b;
}
const result = add(5, 7);
//console.log(result);
//Function declaration with return type
function greet(name) {
    return `Hello! ${name}👋`;
}
//console.log(greet('Zuhair'));
const show = greet('sharafu'); // if we assign this function call to a variable, we can access all the methods of that data type; 
// like .toUpperCase() for string, .toFixed() for number, etc.
function isEven(num) {
    return num % 2 === 0;
}
//console.log(isEven(11));
//console.log(isEven(36));
/*❌function subtract(num1: number, num2: number): number {
    return 'hello';
}                         expected return value is number, so string can't be assingned to number.
    */
function multiply(num1, num2) {
    return num1 * num2;
}
//console.log(multiply(5,6));
function divide(num1, num2) {
    return (num1 / num2);
}
const res = divide(7, 2);
//console.log(Math.round(res));
//Optional Parameters - Sometimes parameter may not exist.
function call(name) {
    console.log(name || 'Ahmed');
}
call(); //No problem if argument didn't passed, because we made it optional;
call('Richu');
//Default parameter.
function salute(name = 'Guest') {
    console.log(`hi, ${name}`);
}
salute();
salute('Pathu');
//Passing type object to a fn as parameter.
function squad(player1) {
    return player1.name;
}
;
console.log(`Player is: ${squad(player1)}`);
//passing inline object as parameter; use this only if minimum properties exist.
function datas({ name, age }) {
    return age;
}
console.log(datas({ name: 'Ahmed', age: 26 }));
function findGrade(mark) {
    if (mark < 0 || mark > 100)
        return 'Invalid marks';
    if (mark >= 90)
        return 'A';
    if (mark >= 80)
        return 'B';
    if (mark >= 70)
        return 'C';
    if (mark >= 60)
        return 'D';
    return 'F';
}
function addition(a, b) {
    return a + b;
}
console.log(addition(1, 8));
console.log(addition('A', 't'));
console.log(addition('a', 9));
//Tuple - Array with fixed types and fixed positions.
let details;
details = ['Muneer', 19];
// details = [19. 'Muneer']; ❌
let apiResponse;
apiResponse = [200, 'Success'];
//# sourceMappingURL=index.js.map