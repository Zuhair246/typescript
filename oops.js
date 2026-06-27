"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//OOPS
class Student {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
const student1 = new Student(1, 'Zuhair', 26);
//console.log(student1);
//Parameter Properties - Access Modifiers.
class Car {
    brand;
    model;
    price;
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    display() {
        console.log(`Brand: ${this.brand} - Model: ${this.model} - Price: ${this.price}`);
    }
}
;
const car1 = new Car('Maruthi', 'Alto 800', 5_00_000);
//car1.display();
//console.log(car1.brand);
class Account {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    showBalance() {
        console.log(this.balance);
    }
}
const account1 = new Account(2000);
// account1.showBalance();
//❌console.log(account1.balance);
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}
const tom = new Dog('Tom');
// tom.bark();
//Workouts:- 
class CAR {
    brand;
    model;
    price;
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    ;
    showDetails() {
        console.log({
            brand: this.brand,
            model: this.model,
            price: this.price
        });
    }
    ;
    changePrice(newPrice) {
        if (newPrice <= 0)
            throw new Error('Invalid Price');
        this.price = newPrice;
    }
}
const baleno = new CAR('Maruthi Suzuki', 'Baleno', 25_00_000);
// baleno.showDetails();
// baleno.changePrice(24_50_000);
// baleno.showDetails();
class BankAccount {
    accountHolder;
    balance;
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    ;
    deposit(amount) {
        this.balance += amount;
    }
    ;
    withdraw(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        if (amount > this.balance) {
            throw new Error('Insufficient balance');
        }
        else {
            this.balance -= amount;
        }
    }
    showBalance() {
        console.log(this.balance);
    }
}
const holder1 = new BankAccount('Zuhair', 1000);
// holder1.deposit(500);
// holder1.showBalance();
// holder1.withdraw(250);
// holder1.showBalance();
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    increaseSalary(amount) {
        this.salary += amount;
    }
    showSalary() {
        console.log(this.salary);
    }
}
const employee1 = new Employee('Savad', 1500);
// employee1.showSalary();
// employee1.increaseSalary(313);
// employee1.showSalary();
//console.log(employee1.salary); ❌
class Candidate {
    name;
    marks;
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    ;
    get Marks() {
        return this.marks;
    }
    set updateMark(value) {
        if (value > 100 || value < 0)
            throw new Error('Invalid marks');
        this.marks = value;
    }
}
const candidate1 = new Candidate('Ajmal,', 50);
console.log(candidate1.Marks);
candidate1.updateMark = 75;
console.log(candidate1.Marks);
//# sourceMappingURL=oops.js.map