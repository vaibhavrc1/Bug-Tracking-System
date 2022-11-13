import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateEmployee: FormGroup;
  
  employee: Employee = new Employee();
  submitted = false;
  message = '';
 

  constructor(private employeeService: EmpServiceService,
    private router: Router,private formBuilder: FormBuilder) {

      this.updateEmployee= formBuilder.group({
        emailAddr: ['',[Validators.required, Validators.email]],
        empId:  ['',Validators.required],
        empName:  ['',Validators.required],
        employeeContact:  ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
        empStatus:  ['',Validators.required],
        employeeUserId:  ['',Validators.required],
        employeePassword:  ['',Validators.required],
        });

     }

  ngOnInit() {
  }


  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  updateEmp(): void {
    this.employeeService.updateEmployee(this.employee.empId, this.employee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          this.router.navigate(['/employee']);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmp();
    alert("Employee updated");    
  }

 
}
