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
  colorPrincipal: string = '#f60';
  colorText: string = '#f2f2f2';

  @Input() cancelable: boolean = false;
  @Input() project: Project;
  @Input() editable: boolean;
  @Output() closeModal = new EventEmitter<{}>();
  
  imageChangedEvent: any = '';
  croppedImage: any = '';

  projectForm: FormGroup;
  domainForm: FormGroup;


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
        alias: this.project.alias        
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
    console.log(value);
  }

  close(){
    this.closeModal.emit(this.cancelable);
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  
}
