import { Component, EventEmitter, Output } from '@angular/core';
import { Composer } from '../Composer.model';
import { SearchService } from '../search.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
    searchTerm = '';
    composers: Composer[] = [];

    @Output() composerFoundEvent = new EventEmitter<Composer[]>();

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

    fetchComposers(): void {
        this.searchService
            .searchComposers(this.searchTerm)
            .subscribe((composers) => this.composerFoundEvent.emit(composers));
    }
}
