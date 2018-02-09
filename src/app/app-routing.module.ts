import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceListComponent } from './experience-list/experience-list.component';
import {RegisteProblemComponent} from './registe-problem/registe-problem.component';
import {ProblemListComponent} from './problem-list/problem-list.component';

const appRoutes: Routes = [
  { path: 'experience-list', component: ExperienceListComponent },
  { path: 'registe-problem', component: RegisteProblemComponent },
  { path: 'problem-list', component: ProblemListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true}
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}

