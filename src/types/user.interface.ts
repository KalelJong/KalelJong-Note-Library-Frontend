import { NoteCollection } from './note-collection.interface';
import { Note } from './note.interface';

export interface User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  noteCollections: NoteCollection[];
  notes: Note[];
}
