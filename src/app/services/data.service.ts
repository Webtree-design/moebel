import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private headers: any;

  constructor(private http: HttpClient) {
    this.setHeader();
  }

  setHeader() {
    try {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    } catch (err) {
      console.log(err + ' 1');
    }
  }

  public getNews() {
    const user = env.user;
    return this.http.post<any>(`${env.apiURL}/newsOpen/get`, {user}, {
      headers: this.headers,
    });
  }
  public getMessage() {
    const user = env.user;
    return this.http.post<any>(`${env.apiURL}/messageOpen/get`, {user}, {
      headers: this.headers,
    });
  }
}
