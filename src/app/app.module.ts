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
import { DataService } from './shared/data/data.service';
import { ConcatPipe } from './shared/pipes/concat.pipe';
import {LanguagePipe} from './shared/pipes/language.pipe';

@NgModule({
    declarations: [
        AppComponent,
        BrowseLetterComponent,
        SearchComponent,
        TestComponent,
        ConcatPipe,
        LanguagePipe
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
