import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interface/courseinterface';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []

  constructor(private courseservice: CourseService) { }

  createcourse(credientials:Course){
    this.courseservice.createCourse(credientials)
  }

  getCourses(){
    this.courseservice.getCourses().subscribe((data)=>{
      // map > filter data
      this.courses = data.map(e=>{
        return {
          id:e.payload.doc.id,
          ...e.payload.doc.data() as {}
        }
      })
    })
  }

  deletecourse(id:any) {
    this.courseservice.deleteCourse(id)
  }

  ngOnInit(): void {
    this.getCourses()
  }

}
