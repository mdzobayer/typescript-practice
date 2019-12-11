// Typescript compiler configuration
// cmd: tsc --init

// NodeJS configuration
// cmd: npm init
// cmd: npm install readline
// cmd: npm install --save @types/readline-sync

// Reference: https://stackoverflow.com/questions/33858763/console-input-in-typescript/49055758
import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Is this exmaple useful? [y/n] ', (answer) => {
    switch(answer.toLowerCase()) {
        case 'y':
            console.log('Super!');
            break;
        case 'n':
            console.log('Sorry!:(');
            break;
        default:
            console.log('Invalid answer!');
    }
    console.log(answer);
    rl.close();
})

