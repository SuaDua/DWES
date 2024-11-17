import fs from 'fs';

function fileExists(fileName) {
    return fs.existsSync(fileName);
}

export { fileExists };