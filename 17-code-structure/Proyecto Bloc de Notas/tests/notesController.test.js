import fs from 'fs';

export function createNote(name, content, callback) {
  const fileName = `${name}.note`;
  fs.writeFile(fileName, content, (err) => {
      if (err) callback(null);
      else callback(`Nota "${name}" guardada.`);
  });
}

export function deleteNote(name, callback) {
  const fileName = `${name}.note`;
  fs.unlink(fileName, (err) => {
      if (err) callback(null);
      else callback(`Nota "${name}" eliminada.`);
  });
}