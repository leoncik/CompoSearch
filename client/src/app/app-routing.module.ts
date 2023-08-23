import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'composers/:composerId', component: ComposerDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
