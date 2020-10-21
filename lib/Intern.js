// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school; 
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

    getSchool() {
        //Testing Function in console.
        console.log(this.school);
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

var obj = new Intern("Roger", 3, "roger@gmail.com", "UCLA");

obj.getSchool();

