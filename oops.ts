//OOPS
class Student {
    id: number;
    name: String;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student(1, 'Zuhair', 26);
//console.log(student1);


//Parameter Properties.
class Car {
    constructor(
        public brand: string,
        public model: string,
        public price: number
    ){}

    display() {
        console.log(`Brand: ${this.brand} - Model: ${this.model} - Price: ${this.price}`)
    }
};
const car1 = new Car('Maruthi', 'Alto 800', 5_00_000);
//car1.display();
//console.log(car1.brand);

class Account {
    private balance: number;

    constructor(balance: number) {
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
    protected name: string;
    constructor(name: string) {
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