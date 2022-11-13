import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugServiceService {
  private baseUrl = 'http://localhost:8088/api';
  constructor(private http: HttpClient) { }


  getAllBugs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bug/all`);
  }

  getAllBugsByStatus(status:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/bug/getby/${status}`);
  }
  
  getBug(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bug/${id}`);
  }

  assignBugToProject(bugId: number,projId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bug/assign-project/${projId}/${bugId}`);
  }

  assignBugToEmployee(bugId: number,projId:number,empId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bug/assign-employee/${projId}/${empId}/${bugId}`);
  }


  createBug(bug: Object): Observable<Object> {
    console.log("post req:::"+JSON.stringify(bug));

    console.log("post req:::"+JSON.stringify(bug));
    return this.http.post(`${this.baseUrl}/bug/`, bug);
  }

  updateBug(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/bug/${id}`, value);
  }

  deleteBug(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/bug/${id}`).pipe(
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
