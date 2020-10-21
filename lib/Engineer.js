// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {
constructor(name, id, email, GitHubUser) {
    //Ususally, you wanna do super(name,id,email) which is coming from constructor. 
    super(name, id, email);
    this.GitHubUser = GitHubUser;
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
        console.log(this.GitHubUser);
        return this.GitHubUser;

    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer;

var obj = new Engineer("Mike", 5, "mike@gmail.com", "Mike@github.com");

obj.getGithub();