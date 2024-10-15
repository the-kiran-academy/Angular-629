import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css'],
})
export class AllStudentComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  students: any;

  ngOnInit(): void {
    this.allStudents();
  }

  allStudents() {
    this.studentService.allStudents().subscribe((response) => {
      this.students = response;
    });
  }
}
