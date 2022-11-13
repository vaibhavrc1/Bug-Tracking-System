import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-bug-update-search',
  templateUrl: './bug-update-search.component.html',
  styleUrls: ['./bug-update-search.component.css']
})
export class BugUpdateSearchComponent implements OnInit {

  selectedBug: Bug;
  id: number;
 
  updateFormBug: FormGroup;
  
  bug: Bug = new Bug();
  submitted = false;
 

  constructor(private bugService: BugServiceService, private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) {

      this.updateFormBug= formBuilder.group({
        bugId:  ['',Validators.required],
       
        });

     }
     ngOnInit() {}

    get() {
    this.bugService.getBug(this.bug.bugId).subscribe(
      data => this.bug=data.response
    );
  }


  onSubmit() {
    this.submitted = true;
    this.bug.bugId=this.updateFormBug.value.bugId;
    this.get();
    alert("Bug found");    
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['update-bug/'+this.bug.bugId]);
  }

}
