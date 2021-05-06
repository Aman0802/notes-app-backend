const validator = require("validator");
const yargs = require("yargs");
const notes = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "Title of note that needs to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "lists all the notes",
  handler: () => {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "reads the note of the specified title",
  builder: {
    title: {
      describe: "Gets the title that needs to be searched",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

// for yargs to go through all the yargs arguments
yargs.parse();
// console.log(yargs.argv)
