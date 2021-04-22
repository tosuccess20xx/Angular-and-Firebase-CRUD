import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './views/courses/courses.component';
import { SingleCourseComponent } from './views/single-course/single-course.component';

const routes: Routes = [
  {path:'', component:CoursesComponent},
  {path:'singlecourse/:id', component:SingleCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
