import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class ExperienceService {
  private queryLessonURL = '/lesson';
  private  testURL = '/users';

  constructor(private http: HttpClient) {}
  GetLessons(): Observable<any> {
    return this.http.get(this.queryLessonURL
    );
  }
  GetSingleProblem(problemID: string): Observable<any> {
    return this.http.get('/problem/' + problemID);
  }
  GetMakeMethod(methodID: string): Observable<any> {
    return this.http.get('make/' + methodID);
  }

  GetObjectTest(param1: string): Observable<any> {
    let pms = new HttpParams();
    pms = pms.append( "p1", param1)
    return this.http.get( "testurl", {params: pms});

  }
  GetExperience(): Observable<any> {
    let experiences: IExperience[] = [];
    this.GetLessons().subscribe((data) => {
      const lessonList: any = data._items;
      for (const lesson of data._items)
      {
        const experience: IExperience = lesson;
        this.GetSingleProblem(lesson.problem).subscribe(response => {
          experience.problem_no = response.problem_no;
          experience.problem_desc = response.production_name + '(' + response.problem_batch + ')' + response.problem_desc;
          experience.problem_type = response.problem_type;
          if (response.make_man.method) {
            this.GetMakeMethod(response.make_man.method).subscribe(makeData => {
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
              experiences.push(experience);
            });
          }
        });
        console.log('newex', experience);
        console.log('all1', experiences);
      }
    });
    console.log('all', Observable.from(experiences));
    return Observable.from(experiences);
  }
}

export interface IExperience extends IMakeReason {
  serial_no: number;
  customer: string;
  dev_stage: string;
  man_tech: string;
  prd_arch: string;
  prd_name: string;
  problem: string;
  problem_no: string;
  problem_desc: string;
  problem_type: string;
  problem_type1: string;
  expand: boolean;
}

export interface IMakeReason {
  ren: [string, string];
  ji: [string, string];
  liao: [string, string];
  fa: [string, string];
  huan: [string, string];
}
