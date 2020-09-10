import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './pages/collections/collections.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { CollectionFormModalComponent } from './components/collection-form-modal/collection-form-modal.component';
import { CollectionListItemComponent } from './components/collection-list-item/collection-list-item.component';


@NgModule({
  declarations: [CollectionsComponent, NewCollectionComponent, CollectionFormComponent, CollectionFormModalComponent, CollectionListItemComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
