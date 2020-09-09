import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';


import {MatCardModule} from '@angular/material/card';
import { TreoCardModule } from '@treo/components/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [ProjectsComponent, ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatCardModule,
    TreoCardModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class ProjectsModule { }
