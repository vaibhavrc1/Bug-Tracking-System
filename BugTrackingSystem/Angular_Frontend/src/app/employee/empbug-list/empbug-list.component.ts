import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-empbug-list',
  templateUrl: './empbug-list.component.html',
  styleUrls: ['./empbug-list.component.css']
})
export class EmpbugListComponent implements OnInit {

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
