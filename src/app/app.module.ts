import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './views/courses/courses.component';
import { SingleCourseComponent } from './views/single-course/single-course.component';
import { FormsModule } from '@angular/forms';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [AppComponent, CoursesComponent, SingleCourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // takes configuration of the app
    AngularFireModule.initializeApp({
      apiKey: '',
      authDomain: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: '',
      measurementId: '',
    }),
    AngularFirestoreModule,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
