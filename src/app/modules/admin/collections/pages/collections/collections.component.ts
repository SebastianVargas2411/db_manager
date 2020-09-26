import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionFormModalComponent } from '../../components/collection-form-modal/collection-form-modal.component';
import { Collection } from '../../models/collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {


  collections:any[] = [
    {
      id_collection: 1,
      id_project: 2,
      title: "users",
      alias:"users",
      fields:[
        {
          id_field: 1,
          title: "name",
          alias: "name",
          type: 1,
          default: 255,
          null: true
        },
        {
          id_field: 2,
          title: "email",
          alias: "email",
          type: 1,
          default: 255,
          null: true
        },
        {
          id_field: 3,
          title: "age",
          alias: "age",
          type: 3,
          default: 11,
          null: false
        },
      ]
    },
    {
      id_collection: 2,
      id_project: 2,
      title:"products",
      alias:"products",
      fields:[
        {
          id_field: 1,
          title: "product",
          alias: "product",
          type: 1,
          default: 255,
          null: true
        },
        {
          id_field: 2,
          title: "email",
          alias: "email",
          type: 1,
          default: 255,
          null: true
        },
        {
          id_field: 3,
          title: "age",
          alias: "age",
          type: 3,
          default: 11,
          null: false
        },
      ]
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleEdit(event){
    this.openCollectionForm(true,event);
  }

  handleDelete(event) {
    if(confirm("Eliminar?")){

      console.log(event);
    }
  }

  openCollectionForm(editable,collection?) {
    const dialogRef = this.dialog.open(CollectionFormModalComponent, {
      data:{
        collection, editable
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
