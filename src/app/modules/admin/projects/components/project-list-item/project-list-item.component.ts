import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {

  constructor() { }

  @Input() project: any = {};
  @Output() handleEdit = new EventEmitter<{}>();
  @Output() handleDelete = new EventEmitter<{}>();

  ngOnInit(): void {
  }

  edit(){
    this.handleEdit.emit(this.project);
  }

  delete(){
    this.handleDelete.emit(this.project);
  }

}
