import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProjectRoutingModule } from './new-project-routing.module';
import { NewProjectComponent } from './new-project.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { TreoCardModule } from '@treo/components/card';

import { ColorPickerModule } from 'ngx-color-picker';




@NgModule({
  declarations: [
    NewProjectComponent
  ],
  imports: [
    CommonModule,
    NewProjectRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    TreoCardModule,

    ColorPickerModule,


    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,

  ],
  
})
export class NewProjectModule { }
