import { mostrarMenu, ejecutarOpcion} from './app.js';

const args = process.argv.slice(2);
if(args.length > 0){
    ejecutarOpcion(args[0]);
}else{
    mostrarMenu();
}