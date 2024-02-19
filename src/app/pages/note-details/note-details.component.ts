import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesService } from 'src/app/core/services/notes.service';
import { Note } from 'src/app/core/services/types/notes.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {

  note!: Note;
  noteId!: number;
  new!: boolean;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.note = this.notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
        this.note = new Note();
      }
    });
  }

  onSubmit(form: NgForm) {;
    if (this.new) {
      this.notesService.add(form.value);
    } else {
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
