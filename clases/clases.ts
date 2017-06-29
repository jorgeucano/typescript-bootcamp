class Perro {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hello() {
        return `Hola ${this.nombre}, ven por galletas`;
    }
}

let miPerro = new Perro('firulais');

console.log(miPerro.hello());


class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    velocidad(velocidad: number = 0) {
        console.log(`La velocidad de ${this.name} es ${velocidad}`);
    }
}

class Caballo extends Animal {
    
    constructor(name: string) {
        // llama a la funcion del padre (exntends)
        super(name);
    }

    velocidad(velocidad: number){
        console.log('galopando');
        super.velocidad(velocidad);
    }
}

let ico: Animal = new Caballo(`Ico Ico Caballito`);
ico.velocidad(100);


class Automovil {
    private nombre;
    private marca;

    constructor(nombre?:string, marca?:string) {
        this.nombre = nombre;
        this.marca = marca;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    setMarca(marca: string){
        this.marca = marca;
    }

    getMarca(): string{
        return this.marca;
    }
}

let escarabajo = new Automovil ();
// escarabajo.nombre no se puede acceder porque es privado
escarabajo.setNombre('Escarabajo');
escarabajo.setMarca('Volkswagen');
console.log(escarabajo);


let gol = new Automovil();
let perrito = new Animal('Mi Perrito');
let gatito = new Animal('mi Gatito');
perrito = gatito; // en nuestra logica no va, pero esta bien porque son del mismo TYPE
// perrito = gol; 
/*
[ts]
Type 'Automovil' is not assignable to type 'Animal'.
Property 'name' is missing in type 'Automovil'.
*/



class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
//let john = new Person("John");  Error: The 'Person' constructor is protected



// ABTRACT 

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
//department = new Department();  error: cannot create an instance of an abstract class
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//department.generateReports();  error: method doesn't exist on declared abstract type


// CLASS + INTERFACES

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);