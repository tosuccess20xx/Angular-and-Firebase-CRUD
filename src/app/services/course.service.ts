import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../interface/courseinterface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private firestore:AngularFirestore) { }

  createCourse(course:Course) {
    // create collection then add
    return this.firestore.collection('courses').add(course)
  }

  // get all courses
  getCourses(){
    // snapshot returns everything in document with id
    // valuechanges only document without id
    return this.firestore.collection('courses').snapshotChanges()
  }


  // Delete course
  deleteCourse(courseId:string) {
    return this.firestore.doc('courses/' + courseId).delete()
  }

  // single course
  getSingleCourse(id:string){
    return this.firestore.collection('courses').doc(id).valueChanges()
  }

  updateCourse(course:Course, id:string){
    return this.firestore.doc('courses/' + id).update(course)
  }

}
