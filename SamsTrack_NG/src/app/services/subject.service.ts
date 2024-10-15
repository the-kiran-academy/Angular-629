import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {}

  addSubject(subject: any): Observable<any> {
    const url = 'http://localhost:8091/subject/add-subject';
    return this.http.post(url, subject);
  }

  allSubject(): Observable<any> {
    const url = 'http://localhost:8091/subject/get-all-subjects';
    return this.http.get(url);
  }

  getSubject(subjectId: any): Observable<any> {
    const url = `http://localhost:8091/subject/get-subject-by-id/${subjectId}`;
    return this.http.get(url);
  }

  updateSubject(subject: any): Observable<any> {
    const url = 'http://localhost:8091/subject/update-subject';
    return this.http.put(url, subject);
  }
}
