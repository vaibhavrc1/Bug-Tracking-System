import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit {

  searchProject: FormGroup;
  
  project: Project = new Project();
  submitted = false;
 

  constructor(private projectService: ProjectServiceService,
    private router: Router,private formBuilder: FormBuilder) {

      this.searchProject= formBuilder.group({
        projectId:  ['',Validators.required],
       
        });

     }

  ngOnInit() {
  }


  newProject(): void {
    this.submitted = false;
    this.project = new Project();
  }

  search(): void {
    this. projectService.getProject(this.project.projectId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/project/'+this.project.projectId]);
        },
        error => {
          console.log(error);
        });}

  onSubmit() {
    this.submitted = true;
    this.search();
   
  }


}
