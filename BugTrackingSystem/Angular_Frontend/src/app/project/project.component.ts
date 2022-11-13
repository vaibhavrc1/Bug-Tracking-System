import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId:number;
  projectName:string;
  projectOwner:string;
  status:string;
  constructor() { }

  ngOnInit(): void {
  }

}
