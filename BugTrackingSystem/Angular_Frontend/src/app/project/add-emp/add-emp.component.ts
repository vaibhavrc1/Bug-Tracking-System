import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  addEmp: FormGroup;
  
  
  submitted = false;
 pid:number;
  eid:number;

  constructor(private projectService: ProjectServiceService,private router: Router,private formBuilder: FormBuilder) {

      this.addEmp= formBuilder.group({
        projectId:  ['',Validators.required],
        empId:  ['',Validators.required],
        });

     }

    
     ngOnInit() {
    
     }
    
    addEmpProj(): void {
      this.projectService.addEmpProject(this.pid,this.eid)
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
    this.addEmpProj();
    alert("employee Added to project successfully");    
  }
 
}
