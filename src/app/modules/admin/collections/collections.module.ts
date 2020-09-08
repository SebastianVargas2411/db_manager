import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';


@NgModule({
  declarations: [CollectionsComponent, NewCollectionComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
