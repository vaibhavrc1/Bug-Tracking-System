import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {
  deleteEmp: FormGroup;
  
  
  submitted = false;
 pid:number;
  eid:number;

  constructor(private projectService: ProjectServiceService,private router: Router,private formBuilder: FormBuilder) {

      this.deleteEmp= formBuilder.group({
        projectId:  ['',Validators.required],
        empId:  ['',Validators.required],
        });

     }

    
     ngOnInit() {
    
     }
    
    deleteEmpProj(): void {
      this.projectService.deleteEmpProject(this.pid,this.eid)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/project']);
          },
          error => {
            console.log(error);
          });}

  onSubmit() {
    this.submitted = true;
    this.deleteEmpProj();
    alert("employee deleted from project successfully");    
  }
 

}
