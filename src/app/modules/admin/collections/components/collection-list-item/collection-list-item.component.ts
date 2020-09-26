import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collection-list-item',
  templateUrl: './collection-list-item.component.html',
  styleUrls: ['./collection-list-item.component.scss']
})
export class CollectionListItemComponent implements OnInit {
  collections: string[] = ['users', 'products', 'stocks'];

  constructor() { }
  @Input() collection: any = {};
  @Output() handleEdit = new EventEmitter<{}>();
  @Output() handleDelete = new EventEmitter<{}>();

  ngOnInit(): void {
  }

  edit(){
    this.handleEdit.emit(this.collection);
  }

  delete(){
    this.handleDelete.emit(this.collection);
  }

}
