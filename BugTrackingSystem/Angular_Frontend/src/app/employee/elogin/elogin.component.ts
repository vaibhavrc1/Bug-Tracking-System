import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeauthenticationService } from 'src/app/services/employeeauthentication.service';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent implements OnInit {
  employeeLogin=new FormGroup({
    userId: new FormControl(''),
    userPassword:new FormControl(''),
    role:new FormControl("employee")
  });
  isExist:string;
  statusCode:number=0;
  constructor(private router: Router,private employeeauthservice:EmployeeauthenticationService) { 
    
    
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.employeeLogin.value);
    this.employeeauthservice.elogin(this.employeeLogin.value).subscribe(data => {
      console.log(data)
      //this.statusCode=JSON.parse(data);
      this.statusCode=data.statusCode;
      console.log(this.statusCode);
    }, 
    error => console.log(error));
 
   
    if (this.statusCode==1) {
      this.isExist = "true";
      localStorage.setItem('currentUser', JSON.stringify(this.employeeLogin.value))	;
			this.router.navigate(['employeeHome'])
			.then(() => {
    window.location.reload();
  });
		} else {
			this.isExist = "false";
			this.router.navigate(['home/role/elogin']);
		}
  }
}
