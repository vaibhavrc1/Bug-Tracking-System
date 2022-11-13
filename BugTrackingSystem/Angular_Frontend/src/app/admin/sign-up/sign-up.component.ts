import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  models:any = {}
  signUp:FormGroup;
  constructor(private formBuilder:FormBuilder, private router: Router) {
   /* this.signUp=formBuilder.group ({
    adminId:new FormControl(),
    adminName:new FormControl(),
    auserName:new FormControl(),
    apassword:new FormControl()
  });*/
  this.signUp=formBuilder.group ({
    adminId:['',Validators.required],
    adminName:['',Validators.required],
    auserName:['',Validators.required],
    apassword:['',[Validators.required,Validators.pattern('^(?=.*[A-Za-z])[A-Za-z\d]{8,}$')]]
  });
}
  ngOnInit(): void {
  }
  
  postData()
  {
    console.log(this.signUp);
    console.log('Entire form Value'+this.signUp.value);
  }

}
