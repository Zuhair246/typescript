// Variable declaration.
let name:string = 'Ajmal';
let age:number = 18;
var isStudent:boolean = false;

name = 'Fathima';
age = 15;
isStudent = true;

//console.log(`name: ${name}, age: ${age}, student: ${isStudent}`);

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
console.log(greet('Zuhair'));

