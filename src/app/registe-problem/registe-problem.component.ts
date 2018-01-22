import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-registe-problem',
  templateUrl: './registe-problem.component.html',
  styleUrls: ['./registe-problem.component.css']
})
export class RegisteProblemComponent implements OnInit {
  validateForm: FormGroup;
  problem: Problem = new Problem();
  constructor() { }

  ngOnInit() {
  }

}

class Problem {
  problemSource: string;
  sourceDep: string;
}
