import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'notes', pathMatch: 'full'
  },
  {
    path: 'notes',
    loadChildren: () => 
      import('./pages/home/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => 
      import('./pages/about/about.module').then((module) => module.AboutModule)
  },
  {
    path: 'new',
    loadChildren: () => 
      import('./pages/note-details/note-details.module').then((module) => module.NoteDetailsModule)
  },
  {
    path: ':id',
    loadChildren: () => 
      import('./pages/note-details/note-details.module').then((module) => module.NoteDetailsModule)
  },
  {
    path: '**',
    redirectTo: 'notes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
