import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './pages/collections/collections.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list",
  },
  {
    path: "list",
    component: CollectionsComponent
  },
  {
    path: "new",
    component: NewCollectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
