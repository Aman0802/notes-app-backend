const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./notes.js');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function() {
        console.log('Removing a note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'lists all the notes',
    handler: function() {
        console.log('Listing all the notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'reads all the notes',
    handler: function(argv) {
        console.log('Reading all the notes!')
    }
})

yargs.parse();
// console.log(yargs.argv)