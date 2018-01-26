import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceListComponent } from './experience-list/experience-list.component';
import {RegisteProblemComponent} from './registe-problem/registe-problem.component';

const appRoutes: Routes = [
    { path: 'experience-list', component: ExperienceListComponent },
    { path: 'registe-problem', component: RegisteProblemComponent }
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

