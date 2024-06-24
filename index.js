#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
// display a colorful welcome message
console.log(chalk.bold.yellow("\n\t\tWelcom Farida's Gym"));
console.log("*".repeat(60));
//Exercises
const exercises = [
    'Push-ups',
    'Squats',
    'Pull-ups',
    'Plank',
    'Lunges',
];
//TrainerTimings
const trainerTimings = [
    'Morning - 6AM to 9AM',
    'Afternoon - 12PM to 3PM',
    'Evening - 5PM to 8PM',
    'Night - 8PM to 10PM',
];
//function banaya hy selectExercisesTiming ka 
async function selectExerciseAndTiming() {
    const { exercise, timing } = await inquirer.prompt([
        {
            type: 'list',
            name: 'exercise',
            message: (chalk.green('Select your favorite exercise:')),
            choices: exercises,
        },
        {
            type: 'list',
            name: 'timing',
            message: (chalk.green('Select your trainer timing:')),
            choices: trainerTimings,
        },
    ]);
    console.log(chalk.yellow(`You have selected: ${exercise} with timing: ${timing}`));
}
// call function banaya hy error handiing ka
selectExerciseAndTiming().catch((error) => {
    console.error('An error occurred:', error);
});
