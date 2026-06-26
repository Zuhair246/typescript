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
//Parameter Properties.
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
account1.showBalance();
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
tom.bark();
//# sourceMappingURL=oops.js.map