import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';

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
    component: NewProjectComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
