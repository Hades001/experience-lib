import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import {ProblemService} from '../problem.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registe-problem',
  templateUrl: './registe-problem.component.html',
  styleUrls: ['./registe-problem.component.css']
})
export class RegisteProblemComponent implements OnInit {
  problemForm: FormGroup;
  typeOptions = [];   // 问题类别
  userList = [];  // 用户列表
  posList = []; // 工位列表
  productList = []; // 产品列表
  constructor(private fb: FormBuilder,
              private problemService: ProblemService,
              private datePipe: DatePipe) {
    this.createForm();
  }

  ngOnInit() {
    this.typeOptions = [
      {value: '外观问题', label: '外观问题'},
      {value: '尺寸问题', label: '尺寸问题'},
      {value: '性能问题', label: '性能问题'},
      {value: '其他问题', label: '其他问题'}
    ];
    // this.problemService.login();
    this.problemService.getPosName().subscribe(data => {
      for (const pos of data.rows) {
        this.posList.push({id: pos.id, name: pos.pos_name});
      }
      console.log(this.posList);
    });


  }
  createForm() {
    this.problemForm = this.fb.group({
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
      short_man: '',
      out_man: '',
      make_man: '',
      follow_man: '',
      is_close: false
    });
  }
  // 获取用户列表
  getUserList(pinyin: string) {
    if (pinyin.length > 1) {
      this.problemService.getUserByPinYin(pinyin).subscribe(res => {
        this.userList = res.rows;
        this.userList = this.userList.filter(a => {
          return a.is_active === true;
        });
      });
    }
  }
  // 获取产品列表
  getPrdList(prd: string) {
    if (prd.length > 1) {
      this.productList = [];
      this.problemService.getPrdName(prd).subscribe(data => {
        for (const p of data.items) {
          this.productList.push(p.prd_barcode);
        }
      });
    }
  }
  createProblem() {
    const body = {
      flag: 0,
      from_src: this.problemForm.get('from_src').value,
      from_depart: this.problemForm.get('from_depart').value,
      commit_date: this.datePipe.transform(this.problemForm.get('commit_date').value, 'yyyy-MM-dd HH:mm:ss'),
      problem_date: this.datePipe.transform(this.problemForm.get('problem_date').value, 'yyyy-MM-dd HH:mm:ss'),

      is_repeat: this.problemForm.get('is_repeat').value,
      production_name: this.problemForm.get('production_name').value,
      problem_desc: this.problemForm.get('problem_desc').value,
      problem_type: this.problemForm.get('problem_type').value,
      problem_batch: this.problemForm.get('problem_batch').value,
      count: this.problemForm.get('count').value,
      pos1: this.problemForm.get('pos1').value,
      short_man: {
        id: ((this.problemForm.get('short_man').value)as any).id,
        name: ((this.problemForm.get('short_man').value) as any).cn_name},
      out_man: {
        id: ((this.problemForm.get('out_man').value)as any).id,
        name: ((this.problemForm.get('out_man').value) as any).cn_name},
      make_man: {
        id: ((this.problemForm.get('make_man').value)as any).id,
        name: ((this.problemForm.get('make_man').value) as any).cn_name},
      follow_man: {
        id: ((this.problemForm.get('follow_man').value)as any).id,
        name: ((this.problemForm.get('follow_man').value) as any).cn_name},
      is_close: this.problemForm.get('is_close').value
    };
    console.log(JSON.stringify(body));
    this.problemService.addContent('/problem/', JSON.stringify(body)).subscribe(data => {
      console.log(data);
    });
  }

}

