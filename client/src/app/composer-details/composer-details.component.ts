import { Component, OnInit } from '@angular/core';
import { ComposerDetails } from '../search/Composer.model';
import { SearchService } from '../search/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-composer-details',
    templateUrl: './composer-details.component.html',
    styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
    composerDetails!: ComposerDetails | undefined;

    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const composerId = +this.route.snapshot.params['composerId'];
        this.searchService
            .getComposerById(composerId)
            .subscribe((composerDetails) => {
                console.log(composerDetails);
                this.composerDetails = composerDetails;
            });
    }
}
