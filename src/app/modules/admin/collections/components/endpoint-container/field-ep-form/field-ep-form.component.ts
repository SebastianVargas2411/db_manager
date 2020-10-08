import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-ep-form',
  templateUrl: './field-ep-form.component.html',
  styleUrls: ['./field-ep-form.component.scss']
})
export class FieldEpFormComponent implements OnInit {
  checked: boolean;
  select: false;
  fields: any[] = [
    {id: 1, name: 'name'},
    {id: 2, name: 'lastname'},
    {id: 3, name: 'phone'},
    {id: 4, name: 'age'},
    {id: 5, name: 'email'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectAll() {
    this.fields.forEach(element => {
      element.checked = true;
      
    });
  }
  unSelectAll() {
    this.fields.forEach(element => {
      element.checked = false;
    });
  }
}
