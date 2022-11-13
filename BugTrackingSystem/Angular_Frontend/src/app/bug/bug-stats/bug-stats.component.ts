import { Component, OnInit } from '@angular/core';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-bug-stats',
  templateUrl: './bug-stats.component.html',
  styleUrls: ['./bug-stats.component.css']
})
export class BugStatsComponent implements OnInit {

  open:number;
  closed:number;
  functional:number;
  content:number;
  visual:number;
  usability:number;
  bugs: Bug[];
  
  constructor(private bugService: BugServiceService) { }

  ngOnInit(): void {
    this.bugService.getAllBugs().subscribe(
      data => {
        this.bugs=data.response
        this.open=this.bugs.filter((obj) => obj.status === "Open").length
        this.closed=this.bugs.filter((obj) => obj.status === "Closed").length
        this.functional=this.bugs.filter((obj) => obj.type === "Functional bug").length
        this.content=this.bugs.filter((obj) => obj.type === "Content bug").length
        this.visual=this.bugs.filter((obj) => obj.type === "Visual bug").length
        this.usability=this.bugs.filter((obj) => obj.type === "Usability suggestion").length
      }
    );


  }




}
