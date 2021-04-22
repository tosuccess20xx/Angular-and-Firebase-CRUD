import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/interface/courseinterface';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  courses:any = {}
  id:string = this.route.snapshot.params.id
  constructor(private courseservice:CourseService, private route:ActivatedRoute, private router:Router) { }

  getSingleCourse() {
    this.courseservice.getSingleCourse(this.id).subscribe((res)=>{
      this.courses = res
    })
  }


  update(credientials:Course) {
    this.courseservice.updateCourse(credientials, this.id)
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.getSingleCourse()
  }

}
