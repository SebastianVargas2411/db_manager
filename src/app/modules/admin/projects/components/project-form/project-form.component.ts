import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  public colorPrincipal: string = '#f60';
  public colorText: string = '#f2f2f2';
  @Input() cancelable: boolean = false;
  @Input() project: Project;
  @Input() editable: boolean;
  @Output() closeModal = new EventEmitter<{}>();
  
  imageChangedEvent: any = '';
  croppedImage: any = '';

  projectForm: FormGroup;
  validation_messages = {
    title: [
      {type:"required", message:"El nombre es requerido"},
      {type:"minlength", message:"El nombre debe ser minimo de 3 letras"}
    ],
    alias: [
      {type:"required", message:"alias es requerido"},
      {type:"minlength", message:"alias debe ser minimo de 3 letras"}
    ],
    color_p: [
      {type:"required", message:"El color principal es requerido"},
    ],
    color_t: [
      {type:"required", message:"El color secundario es requerido"},
    ],
  };

  constructor(
    private cpService: ColorPickerService,
    private formBuilder:FormBuilder,
    ) {
      this.projectForm = this.formBuilder.group({
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
        color_p: new FormControl(
          this.colorPrincipal, 
         
        ),
        
        color_t: new FormControl(this.colorText,

        ),
      },
      );
    }

  ngOnInit(): void {
    console.log(this.project)
    console.log(this.editable);
    if(this.editable){
      this.projectForm.patchValue({
        title: this.project.title,
        alias: this.project.alias,
        color_p: this.project.color_principal,
        color_t: this.project.color_text
      });
      this.colorPrincipal = this.project.color_principal;
      this.colorText = this.project.color_text;
    }
  }

  
  onChangeColor(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);
    const rgba = this.cpService.hsvaToRgba(hsva);
    return this.cpService.rgbaToCmyk(rgba);
  }

  save(value){
    this.projectForm.patchValue({
      color_p: this.colorPrincipal,
      color_t: this.colorText
    });
    console.log(this.colorPrincipal);
    console.log(value);
  }

  close(){
    this.closeModal.emit(this.cancelable);
  }

}
