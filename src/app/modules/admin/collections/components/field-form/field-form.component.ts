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
  currentInputType = 1;

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
      {type:"minlength", message:"El alias debe ser minimo de 3 letras"},
      {type:"pattern", message:"no puede contener caracteres especiales ni mayusculas"}
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
        Validators.minLength(3),
        Validators.pattern("^[a-z0-9_]+[a-z0-9_ ]+$"),
      ])
      ),
      type: new FormControl(this.currentInputType),
      default: new FormControl(""),
      null: new FormControl(false),
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
        type:  this.field.type,
        default: this.field.default,
        null: this.field.null
      });
      this.fieldForm.valueChanges.subscribe(value =>{
        if(
          this.field.alias != value.alias || this.field.title != value.title || 
          this.field.type != value.type || this.field.default != value.default || this.field.null != value.null)
          {
          this.update = true;
        }
        else{
          this.update = false;
        }
      })
    }
  }

  save(){
    console.log(this.fieldForm.value)
    this.emitObject = {action:1, value: this.fieldForm.value}
    this.emitAction();
  }
  
  emitAction(){
    this._emitAction.emit(this.emitObject);
  }

  delete(){
    this.emitObject = {action:3, value: this.index}
    this.emitAction();
  }
  edit(){
    this.emitObject = {action:2, value:{field:this.fieldForm.value, index: this.index}}
    this.emitAction();
  }

  onChange(){
    this.currentInputType = this.fieldForm.value.type;
    console.log(this.fieldForm.value.type)
  }


  aliasChange(){
    this.fieldForm.patchValue({
      alias: this.replaceSpace(this.fieldForm.value.alias)
    })
      
  }

  replaceSpace(value){
    return value.split(' ').join('_');
  }
}
