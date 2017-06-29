var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Perro = (function () {
    function Perro(nombre) {
        this.nombre = nombre;
    }
    Perro.prototype.hello = function () {
        return "Hola " + this.nombre + ", ven por galletas";
    };
    return Perro;
}());
var miPerro = new Perro('firulais');
console.log(miPerro.hello());
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.velocidad = function (velocidad) {
        if (velocidad === void 0) { velocidad = 0; }
        console.log("La velocidad de " + this.name + " es " + velocidad);
    };
    return Animal;
}());
var Caballo = (function (_super) {
    __extends(Caballo, _super);
    function Caballo(name) {
        // llama a la funcion del padre (exntends)
        return _super.call(this, name) || this;
    }
    Caballo.prototype.velocidad = function (velocidad) {
        console.log('galopando');
        _super.prototype.velocidad.call(this, velocidad);
    };
    return Caballo;
}(Animal));
var ico = new Caballo("Ico Ico Caballito");
ico.velocidad(100);
var Automovil = (function () {
    function Automovil(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
    }
    Automovil.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Automovil.prototype.getNombre = function () {
        return this.nombre;
    };
    Automovil.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    return Automovil;
}());
var escarabajo = new Automovil();
// escarabajo.nombre no se puede acceder porque es privado
escarabajo.setNombre('Escarabajo');
escarabajo.setMarca('Volkswagen');
console.log(escarabajo);
var gol = new Automovil();
var perrito = new Animal('Mi Perrito');
var gatito = new Animal('mi Gatito');
perrito = gatito; // en nuestra logica no va, pero esta bien porque son del mismo TYPE
// perrito = gol; 
/*
[ts]
Type 'Automovil' is not assignable to type 'Animal'.
Property 'name' is missing in type 'Automovil'.
*/
var Person = (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
// Employee can extend Person
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
//let john = new Person("John");  Error: The 'Person' constructor is protected
// ABTRACT 
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department;
//department = new Department();  error: cannot create an instance of an abstract class
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//department.generateReports();  error: method doesn't exist on declared abstract type
// CLASS + INTERFACES
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
