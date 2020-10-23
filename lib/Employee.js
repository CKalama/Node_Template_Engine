// TODO: Write code to define and export the Employee class
class Employee {
    ///Need name, id, email, getName, getId, getEmail, getRole=returns employee
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email;
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

    getRole() {
        return 'Employee';

    }
}

//Testing to see of Class is running properly. 
var obj = new Employee("chris", 1, "chris@gmail.com");
var obj2 = new Employee("bill", 2, "bill@gmail.com");

// console.log(obj, obj2);
// obj.getName();
// obj.getId();
// obj2.getEmail();
// obj.getRole();



module.exports = Employee;