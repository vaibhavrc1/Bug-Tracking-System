import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {

  updateBug: FormGroup;
  
  bug: Bug = new Bug();
  submitted = false;
  
  id: number;

  constructor(private bugService: BugServiceService, private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) {

      this.updateBug= formBuilder.group({
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
      this.route.paramMap.subscribe(params => {
        let id = params.get('id');
        this.id = Number(id);
  
        this.bugService.getBug(this.id)
        .subscribe(
          data => this.bug=data.response
          
        )
      });
    }
  
  
    updateproj() {
      this.bugService.updateBug(this.bug.bugId, this.bug)
        .subscribe(data => {
          console.log(data);
          this.bug = new Bug();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateproj();  
      alert("bug updated successfully");    
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
