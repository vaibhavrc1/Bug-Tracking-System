import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {


  bugs: Bug[];
  selectedBug: Bug;
  order:boolean=true;
  totalRec : number;
  page: number = 1;
  
  constructor(private bugService: BugServiceService) { }

  ngOnInit(): void {
    this.allStatus();
  }

  populateDate(status:string){
    this.bugService.getAllBugsByStatus(status).subscribe(
      data => this.bugs=data.response
    );
  }

  showDetails(bug:Bug) {
    this.selectedBug=Object.assign({},bug)
  }

  openStatus(){
    this.bugService.getAllBugsByStatus("Open").subscribe(
      data => this.bugs=data.response
    );
  }

  closedStatus(){
    this.bugService.getAllBugsByStatus("Closed").subscribe(
      data => this.bugs=data.response
    );
  }

  allStatus(){
    this.bugService.getAllBugs().subscribe(
      data => this.bugs=data.response
    );
  }

  sortById(){
    if(this.order){
      let newArr=this.bugs.sort((a,b)=>a.bugId-b.bugId);
      this.bugs=newArr;
    }
    else{
      let newArr=this.bugs.sort((a,b)=>b.bugId-a.bugId);
      this.bugs=newArr;
    }
    this.order=!this.order;
  }

  sortByAssignee(){
    if(this.order){
      this.bugs.sort((a, b) => a.assignee.localeCompare(b.assignee))
    }
    else{
      this.bugs.sort((a, b) => b.assignee.localeCompare(a.assignee))
    }
    this.order=!this.order;
  }

  sortByDescription(){
    if(this.order){
      this.bugs.sort((a, b) => a.bugDesc.localeCompare(b.bugDesc))
    }
    else{
      this.bugs.sort((a, b) => b.bugDesc.localeCompare(a.bugDesc))
    }
    this.order=!this.order;
  }

  sortByType(){
    if(this.order){
      this.bugs.sort((a, b) => a.type.localeCompare(b.type))
    }
    else{
      this.bugs.sort((a, b) => b.type.localeCompare(a.type))
    }
    this.order=!this.order;
  }

  sortByPriority() {
    if(this.order){
    var priorityArray = ["High", "Medium","Low"]
     this.bugs.sort(function(a, b){
         var firstPrio = priorityArray.indexOf( a.priority) ;
         var secPrio = priorityArray.indexOf(b.priority)
         return firstPrio -secPrio;
     });
    }
    else{
      var priorityArray = ["Low", "Medium","High"]
      this.bugs.sort(function(a, b){
        var firstPrio = priorityArray.indexOf( a.priority) ;
        var secPrio = priorityArray.indexOf(b.priority)
        return firstPrio -secPrio;
    });
    }
     this.order=!this.order;
 }

 sortByStartDate(){
  if(this.order){
    this.bugs.sort(function(a, b){
      var aa = a.startDate.split('/').reverse().join(),
          bb = b.startDate.split('/').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
  }
  else{
    this.bugs.sort(function(a, b){
      var aa = a.startDate.split('/').reverse().join(),
          bb = b.startDate.split('/').reverse().join();
      return aa > bb ? -1 : (aa < bb ? 1 : 0);
    });
  }
  this.order=!this.order;
}
sortByEndDate(){
  if(this.order){
    this.bugs.sort(function(a, b){
      var aa = a.endDate.split('/').reverse().join(),
          bb = b.endDate.split('/').reverse().join();
      return aa > bb ? -1 : (aa < bb ? 1 : 0);
    });
  }
  else{
    this.bugs.sort(function(a, b){
      var aa = a.endDate.split('/').reverse().join(),
          bb = b.endDate.split('/').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
  }
  this.order=!this.order;
}


}
