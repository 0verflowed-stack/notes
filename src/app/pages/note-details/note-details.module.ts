import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoteDetailsComponent } from './note-details.component';
import { NoteDetailsRoutingModule } from "./note-details-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [NoteDetailsComponent],
    imports: [CommonModule, NoteDetailsRoutingModule, FormsModule]
})
export class NoteDetailsModule {}