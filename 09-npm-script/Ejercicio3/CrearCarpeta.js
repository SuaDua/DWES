import fs from 'fs';
import path from 'path';

const folderName = process.argv[2];

if(!folderName){
    console.log('Debe pasar un nombre');
    process.exit(1);
}

const folderPath = path.join('./files, foldername');


if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Carpeta "${folderName}" creada en "files".`);
} else {
    console.log(`La carpeta "${folderName}" ya existe en "files".`);
}