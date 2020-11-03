const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if(!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log('Note added Successfully');
    } else {
        console.log('Note Title already taken');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    
    if(notes.length > notesToKeep.length) {
        console.log('Note successfully removed');
        saveNotes(notesToKeep);
    } else {
        console.log('Note does not exist');
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log("Your Notes\n");
    notes.map(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const reqNote = notes.find(note => note.title === title);
    
    if(reqNote) {
        console.log('Title: '+ reqNote.title)
        console.log('Body: '+ reqNote.body)
    } else {
        console.log('Note does not exist with this title');
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};