import { Component, Input } from '@angular/core';
import { Composer } from '../Composer.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
    baseApiUrl = 'http://localhost:3000';

    @Input() composers: Composer[] = [];

    constructor(private router: Router) {}

    // Note: It is not possible to wrap a table row inside an anchor tag. Therefore navigation must be handled programmatically.
    onClickTableRow(composerId: number): void {
        this.router.navigateByUrl(`composers/${composerId}`);
    }
}
