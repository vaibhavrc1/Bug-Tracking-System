import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  
projects: Project[];
  selectedProject: Project;
order : boolean=true;
totalRec : number;
  page: number = 1;
  constructor(private projectService:ProjectServiceService) {
    this.projects = new Array<any>();
  }

  ngOnInit(): void {
    
     this.projectService.getAllProjects().subscribe(
      data => this.projects=data.response
    );
    this.totalRec = this.projects.length;
  }

  showDetails(project:Project) {
    this.selectedProject=Object.assign({},project)
  }
  sortById(){​​​​​
    if(this.order){​​​​​
      let newArr=this.projects.sort((a,b)=>a.projectId-b.projectId);
      this.projects=newArr;
    }​​​​​
    else{​​​​​
      let newArr=this.projects.sort((a,b)=>b.projectId-a.projectId);
      this.projects=newArr;
    }​​​​​
    this.order=!this.order;
  }​​​​​
  sortByName(){​​​​​
    if(this.order){​​​​​
      this.projects.sort((a, b) => a.projectName.localeCompare(b.projectName))
    }​​​​​
    else{​​​​​
      this.projects.sort((a, b) => b.projectName.localeCompare(a.projectName))
    }​​​​​
    this.order=!this.order;
  }​​​​​
  sortByOwner(){​​​​​
    if(this.order){​​​​​
      this.projects.sort((a, b) => a.projectOwner.localeCompare(b.projectOwner))
    }​​​​​
    else{​​​​​
      this.projects.sort((a, b) => b.projectOwner.localeCompare(a.projectOwner))
    }​​​​​
    this.order=!this.order;
  }​​​​​
  sortByStatus() {
    
    
      if(this.order){
      var priorityArray = ["Ongoing", "Closed"]
       this.projects.sort(function(a, b){
           var firstPrio = priorityArray.indexOf( a.status) ;
           var secPrio = priorityArray.indexOf(b.status)
           return firstPrio -secPrio;
       });
      }
      else{
        var priorityArray = ["Closed", "Ongoing"]
        this.projects.sort(function(a, b){
          var firstPrio = priorityArray.indexOf( a.status) ;
          var secPrio = priorityArray.indexOf(b.status)
          return firstPrio -secPrio;
      });
      }
      this.order=!this.order;
}

}
