import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-delete-bug',
  templateUrl: './delete-bug.component.html',
  styleUrls: ['./delete-bug.component.css']
})
export class DeleteBugComponent implements OnInit {

  deleteBug: FormGroup;
  
  bug: Bug = new Bug();
  submitted = false;

  constructor(private bugService: BugServiceService,
    private router: Router,private formBuilder: FormBuilder) {
      this.deleteBug= formBuilder.group({
       
        bugId:  ['',Validators.required],
        
        });
     }

  ngOnInit(): void {
  }

  newBug(): void {
    this.submitted = false;
    this.bug = new Bug();
  }

  delete(): void {
    this.bugService.deleteBug(this.bug.bugId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/bug']);
        },
        error => {
          console.log(error);
        });}

  onSubmit() {
    this.submitted = true;
    // alert(this.deleteBug.value);
    // alert(this.model);

    this.delete();
    alert("bug deleted successfully");    
  }

}
