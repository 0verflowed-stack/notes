import { Injectable } from '@angular/core';
import { Note } from './types/notes.model';

const KEY = 'notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();
  constructor() {
    const localNotes = localStorage.getItem(KEY);
    if (localNotes) {
      this.notes = JSON.parse(localNotes);
    }
  }

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    let newLength = this.notes.push(note);
    localStorage.setItem(KEY, JSON.stringify(this.notes));
    let index = newLength - 1;
    return index;
  }

  update(id: number, title: string, body: string) {
    let note = this.notes[id];
    note.title = title;
    note.body = body;
    localStorage.setItem(KEY, JSON.stringify(this.notes));
  }

  delete(id: number) {
    this.notes.splice(id, 1);
    localStorage.setItem(KEY, JSON.stringify(this.notes));
  }
}
