import { Component, Input } from '@angular/core';
import { Composer } from '../Composer.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
    baseApiUrl = environment.API_URL;

    @Input() composers: Composer[] = [];

    constructor(private router: Router) {}

    // Note: It is not possible to wrap a table row inside an anchor tag. Therefore navigation must be handled programmatically.
    onClickTableRow(composerId: number): void {
        this.router.navigateByUrl(`composers/${composerId}`);
    }
}
