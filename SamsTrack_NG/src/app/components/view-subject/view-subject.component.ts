import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css'],
})
export class ViewSubjectComponent implements OnInit {
  constructor(
    private subjectServices: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  subjectId: any;
  subject: any;
  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');
    this.getSubjectById(this.subjectId);
  }

  getSubjectById(subjectId: any) {
    this.subjectServices.getSubject(subjectId).subscribe((response) => {
      this.subject = response;
    });
  }

  updateSubject() {
    this.subjectServices.updateSubject(this.subject).subscribe((response) => {
      alert('Subject Updated !');
      this.router.navigate(['all-subjects'])
    });
  }
}
