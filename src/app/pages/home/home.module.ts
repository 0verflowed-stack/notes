import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NoteCardComponent } from "src/app/components/note-card/note-card.component";

@NgModule({
    declarations: [HomeComponent, NoteCardComponent],
    imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}