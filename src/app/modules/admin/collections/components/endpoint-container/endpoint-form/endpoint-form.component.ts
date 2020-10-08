import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-endpoint-form',
  templateUrl: './endpoint-form.component.html',
  styleUrls: ['./endpoint-form.component.scss']
})
export class EndpointFormComponent implements OnInit {

  endpointForm: FormGroup;
  secondFormGroup: FormGroup;

  currentInputCollection = 1;
  currentInputMethod = 1;

  collections: any[] = [
    {id: 1, collection: 'Users'},
    {id: 2, collection: 'Products'},
    {id: 3, collection: 'Stocks'},
  ];

  methods: any[] = [
    {id: 1, method: 'GET'},
    {id: 2, method: 'POST'},
    {id: 3, method: 'PUT'},
    {id: 4, method: 'GET ALL'},
    {id: 5, method: 'DELETE'},
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

  constructor(private formBuilder: FormBuilder) {
    this.endpointForm = this.formBuilder.group({
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
      collection: new FormControl(this.currentInputCollection),
      method: new FormControl(this.currentInputCollection),
      public: new FormControl(false),
    },
    );
  }

  ngOnInit(): void {

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  aliasChange(){
    this.endpointForm.patchValue({
      alias: this.replaceSpace(this.endpointForm.value.alias)
    })
  }

  replaceSpace(value){
    return value.split(' ').join('_');
  }

  onChangeCollection(){
    this.currentInputCollection = this.endpointForm.value.collection;
    console.log(this.endpointForm.value.collection)
  }

  onChangeMethod(){
    this.currentInputMethod = this.endpointForm.value.method;
    console.log(this.endpointForm.value.method)
  }

  saveEndpoint(endpoint){
    console.log(endpoint);
  }
}
