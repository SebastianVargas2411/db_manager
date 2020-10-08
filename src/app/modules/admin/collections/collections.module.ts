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
import {MatListModule} from '@angular/material/list';
import { EndpointFormComponent } from './components/endpoint-container/endpoint-form/endpoint-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FieldEpFormComponent } from './components/endpoint-container/field-ep-form/field-ep-form.component';
import { EndpointContainerComponent } from './components/endpoint-container/endpoint-container.component';
import { RuleStepComponent } from './components/endpoint-container/rule-step/rule-step.component';
import { RuleFormComponent } from './components/endpoint-container/rule-step/rule-form/rule-form.component';
import { RuleFieldFormComponent } from './components/endpoint-container/rule-step/rule-form/rule-field-form/rule-field-form.component';


@NgModule({
  declarations: [CollectionsComponent, NewCollectionComponent, CollectionFormComponent, CollectionFormModalComponent, CollectionListItemComponent, FieldFormComponent, EndpointFormComponent, FieldEpFormComponent, EndpointContainerComponent, RuleStepComponent, RuleFormComponent, RuleFieldFormComponent],
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
    MatListModule,
    MatStepperModule
  ]
})
export class CollectionsModule { }
