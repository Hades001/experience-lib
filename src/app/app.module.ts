import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import {ExperienceService} from './experience.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegisteProblemComponent } from './registe-problem/registe-problem.component';
import {ProblemService} from './problem.service';
import {DatePipe} from '@angular/common';
import { ProblemListComponent } from './problem-list/problem-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ExperienceListComponent,
    RegisteProblemComponent,
    ProblemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()

  ],
  providers: [ExperienceService, ProblemService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

