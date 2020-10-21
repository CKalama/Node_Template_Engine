// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name,id, email);
        this.officeNumber = officeNumber;
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
