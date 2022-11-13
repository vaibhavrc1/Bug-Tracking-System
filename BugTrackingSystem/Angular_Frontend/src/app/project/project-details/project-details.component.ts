import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  selectedProject: Project;
  id: number;
 
  constructor(private projectService: ProjectServiceService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.id = Number(id);

      this.projectService.getProject(this.id)
      .subscribe(
        data => this.selectedProject=data.response
        
      )
    });
  }
  navigateToAll() {
    this.router.navigate(['/getAll']);
  }
  navigateToProject() {
    this.router.navigate(['/project']);
  }
}
