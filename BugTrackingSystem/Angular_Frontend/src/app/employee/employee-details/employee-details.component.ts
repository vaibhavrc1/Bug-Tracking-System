import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  selectedEmployee: Employee;
  id: number;

  constructor(private employeeService: EmpServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.id = Number(id);

      this.employeeService.getEmployee(this.id)
      .subscribe(
        data => this.selectedEmployee=data.response
      )
    });
  }
}
