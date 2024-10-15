const {faker} = require('@faker-js/faker');
import chalk from 'chalk'

const randomName = faker.name.fulName();

const colors = [
    chalk.red,
    chalk.green,
    chalk.blue,
    chalk.yellow,
    chalk.magenta,
    chalk.cyan
];

const randomColor = color[Math.floor(Math.random() * colors.length)]

console.log(randomColor(randomName));