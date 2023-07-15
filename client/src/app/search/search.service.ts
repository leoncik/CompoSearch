import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Todo: add composer interface.

  searchComposers(searchTerm: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/composers/?name=${searchTerm}`)
  }
}
