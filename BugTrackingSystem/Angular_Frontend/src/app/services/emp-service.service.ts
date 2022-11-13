import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  private baseUrl = 'http://localhost:8088/api';
  constructor(private http: HttpClient) { }


  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee/all`);
  }
  
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/employee/`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/employee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employee/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }
  

  errorHandler(error) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// Get client-side error
			errorMessage = error.error.message;
		} else {
			// Get server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	}
}
