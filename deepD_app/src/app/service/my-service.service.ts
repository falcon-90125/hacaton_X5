import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feedback } from '../models.data';


const httpOptions ={
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  body: {}
};

const address = "http://127.0.0.1:5000";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) {}

  get_feedbacks(endpoint: string): Observable<any>{
    return this.http.get(address + endpoint);
  }


}
