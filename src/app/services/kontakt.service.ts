import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class KontaktService {
  constructor(private http: HttpClient) {}

  public createEmail(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eBetreff:String;
    eEmailTo: String;
    eCompany: String;
    SMTPMail:String;
  }): Observable<IEmailModel> {
    return this.http.post<any>(`${env.MailapiURL}/mail/sendmail`, emailForm);//change MAYBE to https://webtree-design.de:3000/
  }
} 

export interface IEmailModel {
  eName: String;
  eEmail: String;
  eMessage: String;
  eBetreff:String;
  eEmailTo: String;
  eCompany: String;
  eCheckbox: Boolean;
}
