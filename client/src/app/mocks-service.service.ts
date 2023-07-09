import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MocksServiceService {

  constructor(private http: HttpClient) { }

  getMockedData() {
    return this.http.get('http://localhost:3000/').pipe(
      tap(console.log)
    )
  }
}
