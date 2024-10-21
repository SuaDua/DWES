import fs from 'fs';
import path from 'path';

const folderPath = './files';

FileSystem.forEach(file =>{

    if(file.endsWith('.js')){
        const filePath = path.join(folderPath,file);
        fs.unlinkSync(filePath);
        console.log(`Archivo "${file}" eliminado`);
    }

});