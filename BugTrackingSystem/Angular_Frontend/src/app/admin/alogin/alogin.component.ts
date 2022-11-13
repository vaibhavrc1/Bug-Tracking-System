import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/payload/User';
import { AdminauthenticationService } from 'src/app/services/adminauthentication.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
  adminLogin=new FormGroup({
    userId: new FormControl(''),
    userPassword:new FormControl(''),
    role:new FormControl("admin")
  });
 
  isExist:string;
  statusCode:number=0;
  constructor(private router: Router, private adminauthservice:AdminauthenticationService) {
    
   }

  ngOnInit(): void {
    
  }
  onSubmit()
  {
    console.log(this.adminLogin.value);
    this.adminauthservice.alogin(this.adminLogin.value).subscribe(data => {
      console.log(data)
      this.statusCode=data.statusCode;
      console.log(this.statusCode);
    }, 
    error => console.log(error));
 
   
    if (this.statusCode===1) {
      this.isExist = "true";
      localStorage.setItem('currentUser', JSON.stringify(this.adminLogin.value))	;
			this.router.navigate(['adminhome'])
			.then(() => {
    window.location.reload();
  }); 
		} else {
			this.isExist = "false";
			this.router.navigate(['/home/role/alogin']);
		} 
  }
}
