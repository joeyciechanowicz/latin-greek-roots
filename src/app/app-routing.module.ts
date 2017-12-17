import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowseLetterComponent} from './browse-letter/browse-letter.component';
import {TestComponent} from './test/test.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
    { path: '', redirectTo: '/browse', pathMatch: 'full'},
    { path: 'browse/:letter', component: BrowseLetterComponent},
    { path: 'search/:searchString', component: SearchComponent},
    { path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
