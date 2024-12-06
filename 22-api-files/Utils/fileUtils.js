import fs from 'fs';


function fileExists(fileName) {
    return fs.existsSync(fileName);
}


export const sortNotes = (sortBy, notes) => {
    switch (sortBy) {
        case 'date':
            return notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        case 'title':
            return notes.sort((a, b) => a.title.localeCompare(b.title));
        case 'size':
            return notes.sort((a, b) => b.size - a.size);
        default:
            return notes;
    }
};

export { fileExists };
