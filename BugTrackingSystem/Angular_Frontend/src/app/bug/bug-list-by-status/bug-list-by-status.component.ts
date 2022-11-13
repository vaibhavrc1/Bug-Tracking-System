import { Component, OnInit } from '@angular/core';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-bug-list-by-status',
  templateUrl: './bug-list-by-status.component.html',
  styleUrls: ['./bug-list-by-status.component.css']
})
export class BugListByStatusComponent implements OnInit {

  bugs: Bug[];
  selectedBug: Bug;

  
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
}
