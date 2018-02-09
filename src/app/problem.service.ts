import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProblemService {

  constructor(private http: HttpClient) { }
  getUserByPinYin(pinyin: string ): Observable<any> {
    return this.http.get('/primary/userpinyin/?pinyin=' + pinyin);
  }
  // 获取工位列表
  getPosName(): Observable<any> {
    return this.http.get('/primary/query_ppos/');
  }
  // 获取产品列表
  getPrdName(prd: string): Observable<any> {
    return this.http.get('/primary/query_prd_type_dojo/?prd_barcode=' + prd + '*');
  }

  addContent(resource: string, body: any): Observable<any> {
    return this.http.post(resource, body, {headers: new HttpHeaders().append('content-type', 'application/json')});
  }

  login() {
    this.http.get('/scanner/check_pass_with_name/', {params: new HttpParams().append('user_name', 'lihs')
      .append('user_pass', 'zhxy009'),  responseType: 'text', observe: 'response'}).subscribe(data => {
        console.log('login', data);
    });
  }

  getProblems(state: number): Observable<any> {
    let filter;
    switch (state) {
      case 0:
        filter = {flag: {$lt: 66}};
        break;
      case 1:
        filter = {flag: 66};
        break;
      default:
        break;
    }
    let paramers = new HttpParams();
    paramers = paramers.append('where', JSON.stringify(filter));
    return this.http.get('/problem/', {params: paramers});
  }
}
