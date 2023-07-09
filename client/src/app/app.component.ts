import { Component, OnDestroy, OnInit } from '@angular/core';
import { MocksServiceService } from './mocks-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'client';
  mockSubscription$!: Subscription;

  constructor(private mocksService: MocksServiceService) {}

  ngOnInit(): void {
    this.mockSubscription$ = this.mocksService.getMockedData().subscribe();
  }

  ngOnDestroy(): void {
    this.mockSubscription$.unsubscribe();    
  }
}
