import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ExperienceService, IExperience} from '../experience.service';
@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {
  lessonList: IExperience[] = [];
  constructor(private lessonSv: ExperienceService) {
  }
  ngOnInit() {
    this.lessonSv.GetLessons().subscribe((data) => {
      for (const lesson of data._items)
      {
        const experience: IExperience = lesson;
        experience.expand = false;
        this.lessonSv.GetSingleProblem(lesson.problem).subscribe(response => {
          experience.problem_no = response.problem_no;
          experience.problem_desc = response.production_name + '(' + response.problem_batch + ')' + response.problem_desc;
          experience.problem_type1 = response.problem_type;
          if (response.make_man.method) {
            this.lessonSv.GetMakeMethod(response.make_man.method).subscribe(makeData => {
              // 给experience的人、机、料、法、环赋值
              const ren = makeData.make_reason[0].why;
              experience.ren = [ren[ren.length - 1].why_reason, makeData.make_reason[0].step];
              const ji = makeData.make_reason[1].why;
              experience.ji = [ji[ji.length - 1].why_reason, makeData.make_reason[1].step];
              const liao = makeData.make_reason[2].why;
              experience.liao = [liao[liao.length - 1].why_reason, makeData.make_reason[2].step];
              const  fa = makeData.make_reason[3].why;
              experience.fa = [fa[fa.length - 1].why_reason, makeData.make_reason[3].step];
              const huan = makeData.make_reason[4].why;
              experience.huan = [huan[huan.length - 1].why_reason, makeData.make_reason[4].step];
              this.lessonList.push(experience);
              console.log(this.lessonList);
            });
          }
        });
      }
    }, err => {
      console.log(err);
    });
    /*this.lessonSv.GetExperience().subscribe(list => {
      this.lessonList = list;
      console.log('list', list);
    });*/

  }



}


