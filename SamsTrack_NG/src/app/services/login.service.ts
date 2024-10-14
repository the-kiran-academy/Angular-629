import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginRequest: any): Observable<any> {
    const url = 'http://localhost:8091/user/login-user';
    return this.http.post(url, loginRequest).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    if (error.statusText === 'Unknown Error') {
    }

    return throwError(error.statusText === '');
  }
}
