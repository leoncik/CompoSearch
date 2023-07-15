import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormBuilder } from '@angular/forms';
import { Composer } from './Composer.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
    searchTerm = '';
    composers: Composer[] = [];

    constructor(
        private searchService: SearchService,
        private formBuilder: FormBuilder
    ) {}
    searchForm = this.formBuilder.group({
        searchTerm: '',
    });

    onSearchSubmit(): void {
        this.searchTerm = this.searchForm.value.searchTerm ?? '';
        this.fetchComposers();
    }

    ngOnInit(): void {
        this.fetchComposers();
    }

    fetchComposers(): void {
        this.searchService
            .searchComposers(this.searchTerm)
            .subscribe((composers) => (this.composers = composers));
    }
}
