import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './pages/collections/collections.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { CollectionFormModalComponent } from './components/collection-form-modal/collection-form-modal.component';
import { CollectionListItemComponent } from './components/collection-list-item/collection-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TreoCardModule } from '@treo/components/card';

import { ProjectsRoutingModule } from '../projects/projects-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { FieldFormComponent } from './components/field-form/field-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [CollectionsComponent, NewCollectionComponent, CollectionFormComponent, CollectionFormModalComponent, CollectionListItemComponent, FieldFormComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    TreoCardModule,

    ProjectsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class CollectionsModule { }
