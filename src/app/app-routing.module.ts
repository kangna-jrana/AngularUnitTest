import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HellowordComponent } from './helloword/helloword.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HellowordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
