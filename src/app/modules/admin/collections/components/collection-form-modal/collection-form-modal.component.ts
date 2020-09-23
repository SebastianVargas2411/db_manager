import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Collection } from '../../models/collection.model';
import { CollectionFormComponent } from "../collection-form/collection-form.component";


@Component({
  selector: 'app-collection-form-modal',
  templateUrl: './collection-form-modal.component.html',
  styleUrls: ['./collection-form-modal.component.scss']
})
export class CollectionFormModalComponent implements OnInit {
  editable: boolean = false;
  collection: Collection;

  constructor(
    public dialogRef: MatDialogRef<CollectionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any 
  ) { }

  ngOnInit(): void {
    this.editable = this.data.editable;
    if(this.editable){
      this.collection = this.data.collection;
    }
    console.log(this.data);
  }
  close(value){
    this.dialogRef.close();
  }
}
