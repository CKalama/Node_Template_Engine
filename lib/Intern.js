// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school; 
    }

    getSchool() {
        //Testing Function in console.
        console.log(this.school);
        return this.school;
    }

    getRole() {
        return 'Employee'
    }
}

var obj = new Intern("Roger", 3, "roger@gmail.com", "UCLA");

obj.getSchool();

