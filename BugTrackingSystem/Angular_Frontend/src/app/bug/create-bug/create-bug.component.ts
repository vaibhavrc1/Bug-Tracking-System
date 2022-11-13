import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {

  createBug:FormGroup;

  bug: Bug = new Bug();
  submitted = false;

  constructor(private formBuilder:FormBuilder,private bugService: BugServiceService,private router: Router) { 
    
    this.createBug=formBuilder.group({
      bugId:['',Validators.required],
      status:['',Validators.required],
      assignee:['',Validators.required],
      type:['',Validators.required],
      priority:['',Validators.required],
      startDate:[''],
      endDate:[''],
      bugDesc:[''],
      
    });
  }

  ngOnInit() {
  }
  
  newBug(): void {
    this.submitted = false;
    this.bug = new Bug();
  }

  save() {

    this.bugService
    .createBug(this.bug).subscribe(data => {
      console.log(data)
      this.bug = new Bug();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    console.log("before:::"+JSON.stringify(this.createBug.value));
    this.bug=this.createBug.value;

    console.log("After:::"+JSON.stringify(this.createBug.value));
    if(this.bug.startDate!=="")
    this.bug.startDate=this.formatDate(this.bug.startDate);
    if(this.bug.startDate!=="")
    this.bug.endDate=this.formatDate(this.bug.endDate);
    console.log("after:::"+JSON.stringify(this.bug));
    this.save();
    alert(JSON.stringify(this.createBug.value));
    // alert("Bug added successfully");    
  }

  gotoList() {
    this.router.navigate(['/bug']);
  }

  formatDate (input) {
    let datePart:string = input.match(/\d+/g),
    year = datePart[0].substring(0,4), 
    month = datePart[1], day = datePart[2];
    return day+'/'+month+'/'+year;
  }

  
  
}


