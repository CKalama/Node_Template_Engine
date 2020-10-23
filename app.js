const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

var team = []

//have to call render and pass Team. 
function createHTML() {
var rawHtml = render(team)

fs.writeFile("team.html", rawHtml, function(err){

})
}


function addAnother() {
    inquirer.prompt ({
    message: "Would you like to add another employee?",
    type: "confirm",
    name:"addAnother"    
    }).then(function(placeHolder) {
        //console.log(placeHolder);
        if (placeHolder.addAnother === true) {
            mainQs();
        } else {
            // time to fire off make html function!!
            createHTML();
        }
    })
}

function askEmployeeQ(placeHolder) {
    // console.log("Employee question");
    // var objEmployee = new Employee(placeHolder.name, placeHolder.id, placeHolder.email);
    // team.push(objEmployee);
    // addAnother();
    console.log("ask Employee Question");
    // inquiere thing!!!!
    inquirer.prompt ([
        {
        message: "What Aere Your Duties Here?",
        type: "input",
        name: "employee"
        }
    ]).then(function(employeeAnswer) {
        console.log('employee answerrrr', employeeAnswer);
        console.log('baseline answer!!!!', placeHolder)
        // time to build Intern dude
        var objEmployee = new Employee(placeHolder.name, placeHolder.id, placeHolder.email);
        console.log('our objjjjj',objEmployee);
        team.push(objEmployee)
        addAnother();
        //ask add Another ? inquirer prompt 
        //function return(mainQs)
    })
}

function askInternQ(placeHolder) {
    console.log("ask Intern Question");
    // inquiere thing!!!!
    inquirer.prompt ([
        {
        message: "What school did you attend?",
        type: "input",
        name: "school"
        }
    ]).then(function(internAnswer) {
        console.log('intern answerrrr',internAnswer);
        console.log('baseline answer!!!!', placeHolder)
        // time to build Intern dude
        var objIntern = new Intern(placeHolder.name, placeHolder.id, placeHolder.email, internAnswer.school);
        console.log('our objjjjj',objIntern);
        team.push(objIntern)
        addAnother();
        //ask add Another ? inquirer prompt 
        //function return(mainQs)
    })
}

function askManagerQ(){
    console.log("ask Manager Question");
    inquirer.prompt ([
        {
        message: "What Is your Office Number?",
        type: "input",
        name: "office"
        }
    ]).then(function(managerAnswer) {
        console.log(managerAnswer);


    })
}

function askEngineerQ() {
    console.log("ask Engineer Question");
    inquirer.prompt ([
        {
        message: "What Is your GitHub Account?",
        type: "input",
        name: "gitHub"
        }
    ]).then(function(engineerAnswer) {
        console.log(engineerAnswer);


    })
}


function mainQs() { 
    inquirer.prompt ([
{
    message:"What is your name?",
    type:"input", 
    name: "name" 
}, 
    {
    message:"What is your Id?",
    type: "input",
    name:"id"
}, {
    message:"What is your Email?",
    type: "input",
    name:"email"
}, {
    message:"What is your position?",
    type:"list",
    name:"position",
    choices:["Intern", "Manager", "Engineer", "Employee"]
    }
])
.then(function(answer) {
    
    console.log('answers to all our prompt questions!!', answer);

    if(answer.position === "Intern") {
       
        askInternQ(answer)

    } else if (answer.position === "Manager") {
        
        askManagerQ(answer)

    } else if (answer.position === "Engineer") {

        askEngineerQ(answer)
    } else if (answer.position === "Employee") {

        askEmployeeQ(answer)
    }
})
}


mainQs()



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
