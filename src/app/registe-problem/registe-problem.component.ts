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
  problemForm: FormGroup;
  typeOptions = [];   // 问题类别
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.typeOptions = [
      {value: '外观问题', label: '外观问题'},
      {value: '尺寸问题', label: '尺寸问题'},
      {value: '性能问题', label: '性能问题'},
      {value: '其他问题', label: '其他问题'}
    ];

  }
  createForm() {
    this.problemForm = this.fb.group({
      flag: '',
      from_src: ['内部'],
      from_depart: '',
      commit_date: new Date(),
      problem_date: '',
      is_repeat: '',
      production_name: '',
      problem_desc: '',
      problem_type: '',
      problem_batch: '',
      count: '',
      pos1: '',
      short_man: new User(),
      out_man: new User(),
      make_man: new User(),
      follow_man: new User(),
      is_close: false
    });
  }

}

class  User {
  id: number;
  name: string;
}
