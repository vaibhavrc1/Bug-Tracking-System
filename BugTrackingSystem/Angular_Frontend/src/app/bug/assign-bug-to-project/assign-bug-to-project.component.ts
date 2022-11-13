import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-assign-bug-to-project',
  templateUrl: './assign-bug-to-project.component.html',
  styleUrls: ['./assign-bug-to-project.component.css']
})
export class AssignBugToProjectComponent implements OnInit {

 
  assignBugToProject: FormGroup;
  
  bug: Bug = new Bug();
  submitted = false;

  constructor(private bugService: BugServiceService,
    private router: Router,private formBuilder: FormBuilder) {
      this.assignBugToProject= formBuilder.group({
       
        bugId:  ['',Validators.required],
        projectId:  ['',Validators.required],
        
        });
     }

  ngOnInit(): void {
  }

  newBug(): void {
    this.submitted = false;
    this.bug = new Bug();
  }

  assign(): void {
    this.bugService.assignBugToProject(this.assignBugToProject.value.bugId,this.assignBugToProject.value.projectId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/bug']);
        },
        error => {
          console.log(error);
        });}

  onSubmit() {
    this.submitted = true;
    console.log(this.assignBugToProject.value.bugId+"-----"+this.assignBugToProject.value.projectId);
    this.assign();
    alert("bug is assigned to project successfully");    
  }

}


