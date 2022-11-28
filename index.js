#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets calculate with Samans Calculator');
    await sleep();
    rainbowTitle.stop();
    console.log(`_____________________
|  _________________  |
| | Saman        0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|          
   `);
}
await Welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Select operation to be performed \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
        },
        {
            type: "number",
            name: "Number1",
            message: "Enter first number:"
        },
        {
            type: "number",
            name: "Number2",
            message: "Enter second number:"
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(`${answers.Number1}+ ${answers.Number2}= ${answers.Number1 + answers.Number2}`);
    }
    else if (answers.operator == "Subtraction") {
        console.log(`${answers.Number1} - ${answers.Number2}= ${answers.Number1 - answers.Number2}`);
    }
    else if (answers.operator == "Multiplication") {
        console.log(`${answers.Number1} * ${answers.Number2}= ${answers.Number1 * answers.Number2}`);
    }
    else if (answers.operator == "Division") {
        console.log(`${answers.Number1} / ${answers.Number2}= ${answers.Number1 / answers.Number2}`);
    }
    else if (answers.operator == "Modulus") {
        console.log(`${answers.Number1} % ${answers.Number2}= ${answers.Number1 % answers.Number2}`);
    }
}
;
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.
            prompt({
            type: "input",
            name: "restart",
            message: " Do you want to continue again? Press yes or no:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'Yes');
}
startAgain();
