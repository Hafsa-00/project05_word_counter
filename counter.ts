#! /usr/bin/env node
import inquirer from 'inquirer'


// Declare a constant 'answers' and assign it to the result of the inquirer.prompt function
const answers: {
    sentence: string;
} = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the words:"
    }
])
const words = answers.sentence.trim().split(" ")
// Print the array of words to the console
console.log(words);
console.log(`your sentence word count is ${words.length}`)
