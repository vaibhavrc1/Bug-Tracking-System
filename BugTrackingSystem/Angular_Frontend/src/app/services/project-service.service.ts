import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../model/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private baseUrl = 'http://localhost:8088/api';
  constructor(private http: HttpClient) { }


  getAllProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/project/all`);
  }
  
  getProject(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/project/${id}`);
  }

  createProject(project: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/project/`, project);
  }
  addEmpProject(pid:number,eid: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/project/AddEmp/${pid}/${eid}`);
  }
  deleteEmpProject(pid: number,eid: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/project/DeleteEmp/${pid}/${eid}`);
  }

  updateProject(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/project/${id}`, value);
  }
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/project/${id}`).pipe(
			catchError(this.errorHandler)
		);
  }


 // error handler 
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
