import fs from 'fs';
import path from 'path';



const folderPath = './files';


if (fs.existsSync(folderPath)) {
 
  const files = fs.readdirSync(folderPath);

  
  files.forEach(file => {
    if (path.extname(file) === '.js') {
      fs.unlinkSync(path.join(folderPath, file));
      console.log(`Archivo ${file} eliminado.`);
    }
  });

  console.log('Todos los archivos .js han sido eliminados.');
} else {
  console.log('La carpeta "files" no existe.');
}