import fs from 'fs';
import path from 'path';

const fileName = process.argv[2];

if (!fileName) {
  console.log('Debes proporcionar un nombre para el archivo .js');
  process.exit(1);
}

const folderPath = './files';
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

const filePath = path.join(folderPath, `${fileName}.js`);
fs.writeFileSync(filePath, '// Archivo JavaScript creado\n', 'utf8');

console.log(`Archivo ${fileName}.js creado en la carpeta files.`);