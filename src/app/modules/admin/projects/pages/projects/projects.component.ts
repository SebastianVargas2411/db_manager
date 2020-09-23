import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';
import { ProjectFormModalComponent } from '../../components/project-form-modal/project-form-modal.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  projects:Project[] = [
    {
      id_project: 1,
      id_user: 2,
      title: "Mi primer proyecto",
      alias:"p1",
      color_principal:"#000",
      color_text:"#fff",
      api_key: "dbManagerProject:10-cb936f-16f9e7-8ac913-7ebd11-b6d51f",
      image: "https://i.pinimg.com/originals/a6/e2/98/a6e298357f958a27d329f0b27ccbdb97.jpg",
      access_control: false
    },
    {
      id_project: 1,
      id_user: 2,
      title: "Mi Segundo Proyecto",
      alias:"p2",
      color_principal:"#0023ff",
      color_text:"#f90101",
      api_key: "dbManagerProject:10-cb936f-16f9e7-8ac913-7ebd11-b6d51f",
      image: "https://image.freepik.com/vector-gratis/music-master-royal-music-logo_7791-365.jpg",
      access_control: false
    },
    {
      id_project: 3,
      id_user: 1,
      title: "Mi tercer proyecto",
      alias:"p3",
      color_principal:"#000",
      color_text:"#fff",
      api_key: "dbManagerProject:10-cb936f-16f9e7-8ac913-7ebd11-b6d51f",
      image: "https://pbs.twimg.com/profile_images/517326018177011712/XwrARxbO.png",
      access_control: false
    },
  ]

  ngOnInit(): void {
  }

  handleEdit(event){
    this.openProjectForm(true,event);
  }

  handleDelete(event) {
    if(confirm("Eliminar?")){

      console.log(event);
    }
  }

  openProjectForm(editable,project?) {
    const dialogRef = this.dialog.open(ProjectFormModalComponent, {
      data:{
        project, editable
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
