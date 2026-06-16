// Variable declaration.
let name:string = 'Ajmal';
let age:number = 18;
var isStudent:boolean = false;

name = 'Fathima';
age = 15;
isStudent = true;

//console.log(`name: ${name}, age: ${age}, student: ${isStudent}`);

//Union Types - A variable can have multiple types.
//eg: API response can be 1 or 'd1';
let id: number | string;
id = 123;
id = 'e1c33435e';
//id = false; ❌


//Array declaration
let students: number[] = [6,2,9] ;
//console.log(students);
const names: string[] = ['Faris', 'Muneer', 'Zuhair'];
names.push('Swalih');
//console.log(names);
let results:boolean[] = [true, false];
//console.log(results);

//mixed array
let data: (string | boolean)[] = [
    'Ahmed',
    true
];
//console.log(data);


//Object declaration
let student: {
    name: string,
    age: number
} = {
    name: 'Zuhair',
    age: 26
};                  // There will be error if we didn't assign values to any of the keys of the object.
//console.log(student);

let child: {
    name: string,
    age?: number   // optional property; age is not required; 
} = {
    name: 'Zuhair',
}; 
//console.log(child);


//Function declaration
function add(a:number, b:number) {
    return a+b;
}
const result = add(5,7);
console.log(result);

//Function declaration with return type
function greet(name: string): string {
    return `Hello! ${name}👋`
}
//console.log(greet('Zuhair'));

function isEven(num: number): boolean {
    return num%2 === 0;
}
//console.log(isEven(11));
//console.log(isEven(36));

/*❌function subtract(num1: number, num2: number): number {
    return 'hello';
}                         expected return value is number, so string can't be assingned to number.
    */

function multiply(num1: number, num2: number): number {
    return num1*num2;
}
console.log(multiply(5,6));

function divide(num1: number, num2: number): number {
    return (num1/num2);
}
const res = divide(7,2);
console.log(Math.round(res));

//Optional Parameters - Sometimes parameter may not exist.
function call(name?: string) {
    console.log(name || 'John');
}
call(); //No problem if argument didn't passed, because we made it optional;
call('Richu');

function salute(name: string = 'Guest') {
    console.log(`hi, ${name}`);
}
salute();
salute('Pathu');

