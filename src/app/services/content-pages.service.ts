import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentPagesService {

  constructor(private http: HttpClient) { }

  getPageDetails(page_id) {
    return this.http.get(environment.apiUrl + '/pages/' + page_id);
  }
}
