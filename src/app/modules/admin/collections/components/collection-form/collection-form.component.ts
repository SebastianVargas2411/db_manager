import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Collection } from '../../models/collection.model';


@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {

  collectionForm: FormGroup;
  @Input() cancelable: boolean = false;
  @Input() collection: any;
  @Input() editable: boolean;
  @Output() closeModal = new EventEmitter<{}>();

  fields = [{
    title: "name",
    alias: "name",
    type: 1,
    default: 255,
    null: true
  },
  {
    title: "age",
    alias: "age",
    type: 3,
    default: 11,
    null: false
  },
];

  validation_messages = {
    title: [
      {type:"required", message:"El titulo es requerido"},
      {type:"minlength", message:"El titulo debe ser minimo de 3 letras"}
    ],
    alias: [
      {type:"required", message:"El alias es requerido"},
      {type:"minlength", message:"El alias debe ser minimo de 3 letras"},
      {type:"pattern", message:"no puede contener caracteres especiales ni mayusculas"}
    ]
  };

  constructor(private formBuilder:FormBuilder,) 
  {
    this.collectionForm = this.formBuilder.group({
      title: new FormControl(
        "", 
        Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])
      ),
      alias: new FormControl(
        "", 
        Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[a-z0-9_]+[a-z0-9_ ]+$")
      ])
      ),
    },
    );
   }

  ngOnInit(): void {
    console.log(this.collection);
    console.log(this.editable);
    if(this.editable){
      this.collectionForm.patchValue({
        title: this.collection.title,
        alias: this.collection.alias        
      });
    }
  }

  save(data){
    console.log(data);
  }

  fieldAction(event){
    switch (event.action) {
      
      case 1:
        this.fields.push(event.value);
        break;
    
      case 2:
        this.fields[event.value.index] = event.value.field
        break;

      case 3:
        this.fields.splice(event.value, 1);
        break;
    }

  //  console.log(this.fields);
  }

  aliasChange(){
    this.collectionForm.patchValue({
      alias: this.replaceSpace(this.collectionForm.value.alias)
    })
  }

  replaceSpace(value){
    return value.split(' ').join('_');
  }

  close(){
    this.closeModal.emit(this.cancelable);
  }

}
