import { Component, OnInit, Inject, Input } from "@angular/core";
import { ProjectFormComponent } from "../project-form/project-form.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Project } from '../../models/project.model';

@Component({
  selector: "app-project-form-modal",
  templateUrl: "./project-form-modal.component.html",
  styleUrls: ["./project-form-modal.component.scss"],
})
export class ProjectFormModalComponent implements OnInit {

  editable: boolean = false;
  project: Project;
  constructor(
    public dialogRef: MatDialogRef<ProjectFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any 
  ) {}

  ngOnInit(): void {
    this.editable = this.data.editable;
    if(this.editable){
      this.project = this.data.project;
    }
    console.log(this.data);
  }

  close(value){
    this.dialogRef.close();
  }
}
