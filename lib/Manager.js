// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name,id, email);
        this.officeNumber = officeNumber;
    }
    
    getName() {
        //Console.log is just for testing, its not giving back any info, which is why if you run a npm test if will provide a failed test.
        console.log(this.name)
        //What you need is return so it will know to run it.
        return this.name;

    }

    getId() {
        //Testing id function
        console.log(this.id);
        return this.id;

    }

    getEmail() {
        //Testing email function
        console.log(this.email);
        return this.email;

    }

    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

var obj = new Manager("Charlie", 4, "charlie@gmail.com", "847-111-2222");

obj.getOfficeNumber();
