import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  updateProject: FormGroup;
  
  project: Project = new Project();
  submitted = false;
  
  id: number;

  constructor(private projectService: ProjectServiceService, private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) {

      this.updateProject= formBuilder.group({
        projectId:  ['',Validators.required],
        projectName:  ['',Validators.required],
        projectOwner:  ['',Validators.required],
        status:  ['',Validators.required],
        });

     }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.id = Number(id);

      this.projectService.getProject(this.id)
      .subscribe(
        data => this.project=data.response
        
      )
    });
  }


  updateproj() {
    this.projectService.updateProject(this.project.projectId, this.project)
      .subscribe(data => {
        console.log(data);
        this.project = new Project();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateproj();  
    alert("project updated successfully");    
  }

  gotoList() {
    this.router.navigate(['/project']);
  }


}
