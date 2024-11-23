import readline from 'readline';
import { handleRoutes } from '../routes/notesRoutes.js';

function startCLI() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    function showMenu() {
        console.log('\n1. Crear nueva nota');
        console.log('2. Eliminar nota');
        console.log('3. Salir');

        rl.question('Elige una opción: ', (option) => {
            handleRoutes(option, rl, (message) => {
                console.log(message);
                if (option !== '3') showMenu();
            });
        });
    }

    showMenu();
}

export default startCLI;