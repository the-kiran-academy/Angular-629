import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(private studentService: StudentService,private router:Router) {}

  email: any;
  name: any;
  addStudent() {
    const student = {
      email: this.email,
      name: this.name,
    };
    this.studentService.addStudent(student).subscribe((response)=>{
      alert('Student Added Successfully !')
      this.router.navigate(['/all-students'])
    });
  }
}
