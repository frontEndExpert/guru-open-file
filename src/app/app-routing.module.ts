import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NotFoundComponent } from './not-found.component';
import { AboutComponent } from './about/about.component';
import { ReadfileComponent } from './readfile/readfile.component';
const routes: Routes = [
  { path: '', component: ReadfileComponent },
  { path: 'not-found', component: ReadfileComponent },
  { path: 'readfile', component: ReadfileComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
