import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

 
  addProject: FormGroup;
  
  project: Project = new Project();
  submitted = false;
  errors:any

  constructor(private projectService: ProjectServiceService,
    private router: Router,private formBuilder: FormBuilder) {

      this.addProject= formBuilder.group({
       
        projectName:  ['',Validators.required],
        projectOwner:  ['',Validators.required],
        status:  ['',Validators.required],
        });

     }

  ngOnInit() {
  }


  newProject(): void {
    this.submitted = false;
    this.project = new Project();
  }

  save() {
    this.projectService
    .createProject(this.project).subscribe(data => {
      console.log(data)
      this.project = new Project();
      this.gotoList();
    }, 
    // error => console.log(error));
    error => {this.errors=error}
  
    )
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    console.log(this.errors);
    alert("Project added successfully");    
  }

  gotoList() {
    this.router.navigate(['/project']);
  }




}
