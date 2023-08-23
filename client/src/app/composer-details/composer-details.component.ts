import { Component, OnInit } from '@angular/core';
import { ComposerDetails } from '../search/Composer.model';
import { SearchService } from '../search/search.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-composer-details',
    templateUrl: './composer-details.component.html',
    styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
    composerDetails$!: Observable<ComposerDetails>;

    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const composerId = +this.route.snapshot.params['composerId'];
        this.composerDetails$ = this.searchService.getComposerById(composerId);
    }
}
