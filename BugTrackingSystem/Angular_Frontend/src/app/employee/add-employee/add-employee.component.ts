import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee: FormGroup;
  
  employee: Employee = new Employee();
  submitted = false;
 

  constructor(private employeeService: EmpServiceService,
    private router: Router,private formBuilder: FormBuilder) {

      this.addEmployee= formBuilder.group({
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

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    alert("Employee added successfully");    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }





}
