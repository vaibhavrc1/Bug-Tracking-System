import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  models:any = {}
  admin: Admin = new Admin();
  signUp=new FormGroup({
    adminId: new FormControl(this.admin.adminId,[Validators.required]),
    adminContact : new FormControl(this.admin.adminContact,[Validators.required]),
    adminName: new FormControl(this.admin.adminName,[Validators.required]),
    adminUserid: new FormControl(this.admin.adminUserid,[Validators.required]),
    adminPassword:new FormControl(this.admin.adminPassword,[Validators.required])
  });
  
  
  
  
  submitted = false;
  constructor(private formBuilder:FormBuilder, private router: Router,private adminService:AdminServiceService) {
    
   }

  ngOnInit(): void {
  }
  newAdmin(): void {
    this.submitted = false;
    this.admin = new Admin();
  }
 
  save() {
    this.adminService
    .createAdmin(this.admin).subscribe(data => {
      console.log(data)
      this.admin= new Admin();
      
    }, 
    error => console.log(error));
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
    alert("Admin added successfully");    
  }
 
  

  

}
