import { Component, OnInit } from '@angular/core';
import {ProblemService} from '../problem.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  _dataSet = [];
  _loading = true;
  constructor(private problemService: ProblemService) { }

  ngOnInit() {
    this.problemService.getProblems(0).subscribe(data => {
      console.log(data);
    });
  }

}
