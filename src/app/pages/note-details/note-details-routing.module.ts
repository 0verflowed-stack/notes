import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NoteDetailsComponent } from "./note-details.component";

const routes: Routes = [
    {
        path: '', component: NoteDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class NoteDetailsRoutingModule { }
  