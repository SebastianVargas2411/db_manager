import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list",
  },
  {
    path: "list",
    component: ProjectsComponent
  },
  {
    path: "new",
    loadChildren: () => import('app/modules/admin/projects/new-project/new-project.module').then(m => m.NewProjectModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
