import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { values } from 'lodash';


@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.scss']
})
export class FieldFormComponent implements OnInit {

  fieldForm: FormGroup;
  @Input() field: any = {};
  @Input() editable: boolean;
  @Input() index: number;
  @Output() _emitAction = new EventEmitter<any>();

  emitObject = {}
  update = false;
  types: any[] = [
    {id: 1, type: 'varchar', length: 255},
    {id: 2, type: 'boolean'},
    {id: 3, type: 'int', length: 11},
  ];


  validation_messages = {
    title: [
      {type:"required", message:"El titulo es requerido"},
      {type:"minlength", message:"El titulo debe ser minimo de 3 letras"}
    ],
    alias: [
      {type:"required", message:"El alias es requerido"},
      {type:"minlength", message:"El alias debe ser minimo de 3 letras"}
    ]
  };

  constructor(private formBuilder:FormBuilder) {
    this.fieldForm = this.formBuilder.group({
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
        Validators.minLength(3)
      ])
      ),
      type: new FormControl(),
    },
    );
  }
  //convertir espacios en blanco en guin bajo(alias)
  //luego valida que no exista, (tengo un array precreados y loscomparo con esa lista) opcion 2 que le agregue
  //un _2 para que no se repita y valide tambien
  ngOnInit(): void {
    console.log(this.field)
    if(this.editable){
      this.fieldForm.patchValue({
        title: this.field.title,
        alias: this.field.alias,
        type:  this.field.type  
      });
      this.fieldForm.valueChanges.subscribe(value =>{
        if(this.field.alias != value.alias || this.field.title != value.title){
          this.update = true;
        }
        else{
          this.update = false;
        }
      })
    }
  }

  emitAction(){
    this._emitAction.emit(this.emitObject);
  }

  save(){
    console.log(this.fieldForm.value)
    this.emitObject = {action:1, value: this.fieldForm.value}
    this.emitAction();
  }

  delete(){
    this.emitObject = {action:3, value: this.index}
    this.emitAction();
  }
  edit(){
    this.emitObject = {action:2, value:{field:this.fieldForm.value, index: this.index}}
    this.emitAction();
  }
}
