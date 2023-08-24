import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Composer, ComposerDetails } from './Composer.model';
import { environment } from 'src/environments/environment.development';
environment;

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    baseUrl = environment.API_URL;

    constructor(private http: HttpClient) {}

    // We set an empty string as the default value to fetch all composers if no searchTerm is provided.
    searchComposers(searchTerm: string = ''): Observable<Composer[]> {
        return this.http.get<Composer[]>(
            `${this.baseUrl}/composers/?name=${searchTerm}`
        );
    }

    getComposerById(composerId: number): Observable<ComposerDetails> {
        return this.http.get<ComposerDetails>(
            `${this.baseUrl}/composers/${composerId}`
        );
    }
}
