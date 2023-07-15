import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = "";
  composers = [];

  constructor (private searchService: SearchService) {}

  ngOnInit(): void {
    this.fetchComposers();
  }

  fetchComposers(): void {
    this.searchService.searchComposers(this.searchTerm).subscribe(
      composers => this.composers = composers
    )
  }
}
