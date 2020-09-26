import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';


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
      {type:"minlength", message:"El alias debe ser minimo de 3 letras"},
      {type:"pattern", message:"no puede contener caracteres especiales ni mayusculas"}
    ]
  };

  constructor(
    private cpService: ColorPickerService,
    private formBuilder:FormBuilder,
    private projectService:ProjectService
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
          Validators.minLength(3),
          Validators.pattern("^[a-z0-9_]+[a-z0-9_ ]+$"),
        ])
        ),
        color_principal: new FormControl(
          this.colorPrincipal, 
         
        ),
        
        color_text: new FormControl(this.colorText,

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
    console.log(value)
    this.projectService.createProject(value).subscribe(response => {
      let res:any = response; 
      if(res.status == 200){   
        this.projectForm.reset();
        console.log(res.message)
      }
      else {
        console.log("else",res.message);
        console.log("else", res.status);
      }
    });
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

  aliasChange(){
    this.projectForm.patchValue({
      alias: this.replaceSpace(this.projectForm.value.alias)
    })    
  }
  replaceSpace(value){
    return value.split(' ').join('_');
  } 
}
