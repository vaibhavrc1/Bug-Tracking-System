import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-assign-bug-to-employee',
  templateUrl: './assign-bug-to-employee.component.html',
  styleUrls: ['./assign-bug-to-employee.component.css']
})
export class AssignBugToEmployeeComponent implements OnInit {


 
  assignBugToEmployee: FormGroup;
  
  bug: Bug = new Bug();
  submitted = false;

  constructor(private bugService: BugServiceService,
    private router: Router,private formBuilder: FormBuilder) {
      this.assignBugToEmployee= formBuilder.group({
       
        bugId:  ['',Validators.required],
        projectId:  ['',Validators.required],
        employeeId:  ['',Validators.required],
        
        });
     }

  ngOnInit(): void {
  }

  newBug(): void {
    this.submitted = false;
    this.bug = new Bug();
  }

  assign(): void {
    this.bugService.assignBugToEmployee(this.assignBugToEmployee.value.bugId,this.assignBugToEmployee.value.projectId,this.assignBugToEmployee.value.employeeId)
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
    this.assign();
    alert("bug is assigned to employee successfully");    
  }

}
