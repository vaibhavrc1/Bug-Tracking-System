import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  deleteEmployee: FormGroup;
  
  employee: Employee = new Employee();
  submitted = false;
 

  constructor(private employeeService: EmpServiceService,
    private router: Router,private formBuilder: FormBuilder) {

      this.deleteEmployee= formBuilder.group({
       
        empId:  ['',Validators.required],
        
        });

     }

  ngOnInit() {
  }


  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  deleteEmp(): void {
    this.employeeService.deleteEmployee(this.employee.empId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employee']);
        },
        error => {
          console.log(error);
        });}

  onSubmit() {
    this.submitted = true;
    this.deleteEmp();
    alert("Employee deleted successfully");    
  }

}
