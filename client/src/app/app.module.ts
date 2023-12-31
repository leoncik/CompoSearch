import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        HeaderComponent,
        SearchBarComponent,
        SearchResultsComponent,
        ComposerDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
