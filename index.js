"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable declaration.
let name = 'Ajmal';
let age = 18;
var isStudent = false;
name = 'Fathima';
age = 15;
isStudent = true;
//console.log(`name: ${name}, age: ${age}, student: ${isStudent}`);
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
//console.log(child);
//Function declaration
function add(a, b) {
    return a + b;
}
const result = add(5, 7);
console.log(result);
//Function declaration with return type
function greet(name) {
    return `Hello! ${name}👋`;
}
console.log(greet('Zuhair'));
//# sourceMappingURL=index.js.map