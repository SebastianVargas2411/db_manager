import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections.component';


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
    loadChildren: () => import('app/modules/admin/collections/new-collection/new-collection.module').then(m => m.NewCollectionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
