import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  searchEmployee: FormGroup;
  
  employee: Employee = new Employee();
  submitted = false;
  
  constructor(private employeeService: EmpServiceService,
    private router: Router,private formBuilder: FormBuilder) {

      this.searchEmployee= formBuilder.group({
       
        empId:  ['',Validators.required],
        
        });

     }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  search(): void {
    this.employeeService.getEmployee(this.employee.empId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employee/'+this.employee.empId]);
        },
        error => {
          console.log(error);
        });}

  onSubmit() {
    this.submitted = true;
    this.search();
    alert("Employee found");    
  }

}
