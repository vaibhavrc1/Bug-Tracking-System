import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

 
  deleteProject: FormGroup;
  
  project: Project = new Project();
  submitted = false;
 

  constructor(private projectService: ProjectServiceService,
    private router: Router,private formBuilder: FormBuilder) {

      this.deleteProject= formBuilder.group({
        projectId:  ['',Validators.required],
       
        });

     }

  ngOnInit() {
  }


  newProject(): void {
    this.submitted = false;
    this.project = new Project();
  }

  deleteProj(): void {
    this.projectService.deleteProject(this.project.projectId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/project']);
        },
        error => {
          console.log(error);
        });}

  onSubmit() {
    this.submitted = true;
    this.deleteProj();
    alert("Project deleted successfully");    
  }

 


}
