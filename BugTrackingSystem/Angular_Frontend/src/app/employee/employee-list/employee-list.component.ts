import { Component, OnInit ,ViewChild } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[];
  selectedEmployee: Employee;
  order:boolean;


  constructor(private employeeService: EmpServiceService) {
  }

  ngOnInit(): void {
     this.employeeService.getAllEmployees().subscribe(
      data => this.employees=data.response
    );
  }

  showDetails(employee:Employee) {
    this.selectedEmployee=Object.assign({},employee)
  }


   sortById(){

     if(this.order){
       let newarr = this.employees.sort((a,b) => a.empId - b.empId);
       this.employees = newarr
     }
     else{
       let newarr = this.employees.sort((a,b) => b.empId - a.empId);
       this.employees = newarr
     }

     this.order = !this.order;

   }

   sortByName(){
    if(this.order){
      this.employees.sort(function(a, b){
          if(a.empName < b.empName) { return -1; }
          if(a.empName > b.empName) { return 1; }
          return 0;
    })
    }
    else{
      this.employees.sort(function(a, b){
        if(a.empName > b.empName) { return -1; }
        if(a.empName < b.empName) { return 1; }
        return 0;
  })
    }
    this.order=!this.order;
  }

}
