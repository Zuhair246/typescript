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


//Parameter Properties - Access Modifiers.
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
// account1.showBalance();
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
// tom.bark();

//Workouts:- 

class CAR{
    constructor(
        public brand: string,
        public model: string,
        private price: number
    ){};

    showDetails() :void {
        console.log({
            brand: this.brand,
            model: this.model,
            price: this.price
        });
    };

    changePrice(newPrice: number) :void {
        if(newPrice<=0) throw new Error('Invalid Price');
        this.price = newPrice;
    }
}

const baleno = new CAR('Maruthi Suzuki', 'Baleno', 25_00_000);
// baleno.showDetails();
// baleno.changePrice(24_50_000);
// baleno.showDetails();


class BankAccount {
    constructor(
        public accountHolder: string,
        private balance: number
    ){};

    deposit(amount: number): void {
        this.balance += amount;
    };

    withdraw(amount: number): void {
        if(amount<=0) throw new Error('Invalid amount');

        if(amount>this.balance){
            throw new Error('Insufficient balance')
        }else{
            this.balance -= amount;
        }
    }

    showBalance(): void {
        console.log(this.balance);
    }
}

const holder1 = new BankAccount('Zuhair', 1000);
// holder1.deposit(500);
// holder1.showBalance();
// holder1.withdraw(250);
// holder1.showBalance();


class Employee {
    public name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    increaseSalary(amount: number) : void {
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


//Getters and Setters
class Candidate{
    constructor(
        public name: string,
        private marks: number
    ){};

    get Marks() {
        return this.marks;
    }

    set updateMark(value: number) {
        if(value>100 || value<0) throw new Error ('Invalid marks');
        this.marks = value;
    }
}
const candidate1 = new Candidate('Ajmal,', 50);
//console.log(candidate1.Marks);
candidate1.updateMark = 75;
//console.log(candidate1.Marks);

//Static Members.
class Teacher {
    static college: string = 'Govt. College Victoria, Palakkad';
    constructor(
        public department: string
    ) {}
}

const physics = new Teacher('Physics');
console.log(physics.department);
console.log(Teacher.college);

class Calculator {
    static add(a: number, b: number): number {
        return a+b;
    }
 }
//console.log(Calculator.add(8,9));

class Player {
    static playerCount = 0;
    constructor(
        public name: string,
    ){
        Player.playerCount++;
    }
}

const messi = new Player('Messi');
const ronaldo = new Player('Cristiano Ronaldo');
const neymar = new Player('Neymar');
const embape = new Player('Embape');
//console.log(Player.playerCount);


//Inheritance
class Person {
    constructor (
        public name: string,
        public age: number
    ){};

    display(): void {
        console.log(this.name);
    }
}

class Security extends Person {
    constructor(
        name: string,
        age: number,
        public gateNo: number
    ){
        super(name, age);
    }
}

const security1 = new Security('Das', 45, 3);
console.log(security1.name);
security1.display();
console.log(security1.gateNo);