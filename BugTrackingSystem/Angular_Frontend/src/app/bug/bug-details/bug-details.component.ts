import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bug } from 'src/app/model/bug';
import { BugServiceService } from 'src/app/services/bug-service.service';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  selectedBug: Bug;
  id: number;

  constructor(private bugService: BugServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.id = Number(id);

      this.bugService.getBug(this.id)
      .subscribe(
        data => this.selectedBug=data.response
      )
    });
  }
}
