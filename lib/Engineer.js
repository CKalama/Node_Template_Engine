// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {
constructor(name, id, email, githubUsername) {
    //Ususally, you wanna do super(name,id,email) which is coming from constructor. 
    super(name, id, email);
    this.githubUsername = githubUsername
}

    getGithub() {
        return this.githubUsername;

    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer;