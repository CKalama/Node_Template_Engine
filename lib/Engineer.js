// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {
constructor(name, id, email, githubUsername) {
    //Ususally, you wanna do super(name,id,email) which is coming from constructor. 
    super(name, id, email);
    this.githubUsername = githubUsername
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

    getGithub() {
        return this.githubUsername;

    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer;