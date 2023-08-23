import { Component, Input } from '@angular/core';
import { Composer } from '../Composer.model';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
    baseApiUrl = 'http://localhost:3000';

    @Input() composers: Composer[] = [];
}
