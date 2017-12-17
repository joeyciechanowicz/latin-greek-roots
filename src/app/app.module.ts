import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowseLetterComponent } from './browse-letter/browse-letter.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { DataService } from './data.service';
import { ConcatPipe } from './concat.pipe';

@NgModule({
    declarations: [
        AppComponent,
        BrowseLetterComponent,
        SearchComponent,
        TestComponent,
        ConcatPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
