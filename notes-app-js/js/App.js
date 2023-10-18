import NotesView from './NotesView.js';
import NotesAPI from './NotesAPI.js';

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());

    this._refreshNotes();
  }

  _refreshNotes() {
    const notes = NotesAPI.getAllNotes();

    this.setNotes(notes);

    if (notes.length > 0) {
      this._setActiveNote(notes[0]);
    }
  }

  _setNotes() {}

  _setActiveNote(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
  }

  _handlers() {
    return {
      onNoteSelect: (noteId) => {
        console.log('Note Selected: ' + noteId);
      },

      onNoteAdd: () => {
        console.log('Note Add');
      },

      onNoteEdit: (title, body) => {
        console.log(title, body);
      },

      onNoteDelete: (noteId) => {
        console.log('Note DELETED: ' + noteId);
      },
    };
  }
}
