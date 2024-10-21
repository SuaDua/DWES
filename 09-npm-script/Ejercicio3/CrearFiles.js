import fs from 'fs';

const folderPath = './files';

if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
    console.log('carpeta "files" creada');
}else{
    console.log('La carpeta "files" ya existe')
}