import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthenticationService } from 'src/app/services/adminauthentication.service';
import { EmployeeauthenticationService } from 'src/app/services/employeeauthentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'bugtracking';

  currentUser:any;
  constructor(private router:Router, private adminauthservice:AdminauthenticationService,private employeeauthservice :EmployeeauthenticationService) { }

  ngOnInit(): void {
    
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }

  doadminLogout(){
    this.adminauthservice.alogout();
    this.router.navigateByUrl('/home').then(()=>{
      window.location.reload();;
    });

  }
  doemployeeLogout()
  {
    this.employeeauthservice.elogout();
    this.router.navigateByUrl('/home').then(()=>{
      window.location.reload();;
    });
  }

}
