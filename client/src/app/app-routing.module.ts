import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'composer', component: ComposerDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
