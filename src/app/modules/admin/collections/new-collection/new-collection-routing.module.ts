import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCollectionComponent } from './new-collection.component';


const routes: Routes = [
  {path: '', component: NewCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCollectionRoutingModule { }
