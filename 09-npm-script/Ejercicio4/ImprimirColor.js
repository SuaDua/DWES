import chalk from 'chalk';

const color = process.argv[2];

switch (color) {
  case 'azul':
    console.log(chalk.blue('Este texto se imprime en azul.')); 
    break;
  case 'rojo':
    console.log(chalk.red('Este texto se imprime en rojo.')); 
    break;
  case 'verde':
    console.log(chalk.green('Este texto se imprime en verde.')); 
    break;
  default:
    console.log('Color no reconocido. Usa: azul, rojo, o verde.');
    break;
}