import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css'],
})
export class AllSubjectComponent implements OnInit {

  showForm = false;
  constructor(private subjectService: SubjectService) {}
  subjects: any;

  name: any = '';
  ngOnInit(): void {
    this.allSubject();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  allSubject() {
    this.subjectService.allSubject().subscribe((response) => {
      this.subjects = response;
    });
  }

  addSubject() {
    const subject = {
      name: this.name,
    };
    this.subjectService.addSubject(subject).subscribe((response) => {
      alert('Subject Added !');
      this.allSubject();
    });
  }
}
