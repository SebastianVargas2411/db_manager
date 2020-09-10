import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './pages/projects/projects.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';

import { SharedModule } from 'app/shared/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { TreoCardModule } from '@treo/components/card';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProjectFormModalComponent } from './components/project-form-modal/project-form-modal.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectsComponent, NewProjectComponent, ProjectFormComponent, ProjectListItemComponent, ProjectFormModalComponent, ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatCardModule,
    TreoCardModule,
    MatButtonModule,
    MatIconModule,
    TreoCardModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,    
    ColorPickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ImageCropperModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
