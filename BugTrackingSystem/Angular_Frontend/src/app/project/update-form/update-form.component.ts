import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  selectedProject: Project;
  id: number;
 
  updateFormProject: FormGroup;
  
  project: Project = new Project();
  submitted = false;
 

  constructor(private projectService: ProjectServiceService, private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) {

      this.updateFormProject= formBuilder.group({
        projectId:  ['',Validators.required],
       
        });

     }
     ngOnInit() {}

    get() {
    this.projectService.getProject(this.project.projectId).subscribe(
      data => this.project=data.response
    );
  }


  onSubmit() {
    this.submitted = true;
    this.get();
    alert("Project found");    
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['update/'+this.project.projectId]);
  }
 
}
