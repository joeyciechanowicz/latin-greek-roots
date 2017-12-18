import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Alphabet} from './alphabet';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import {DataService, RootAndIndex} from './shared/data/data.service';
import {MatAutocompleteSelectedEvent} from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public searchCtrl: FormControl;
    public browseCtrl: FormControl;
    public alphabet = Alphabet;
    public filteredRoots: Observable<RootAndIndex[]>;

    private browseSub: Subscription;

    constructor(private router: Router, private dataService: DataService) {
        this.searchCtrl = new FormControl();
        this.browseCtrl = new FormControl();

        this.browseCtrl.valueChanges.subscribe(
            (letter) => {
                this.router.navigateByUrl(`/browse/${letter}`);
            }
        );
    }

    navigate(url) {
        this.router.navigateByUrl(url);
    }

    ngOnInit() {
        this.filteredRoots = this.searchCtrl.valueChanges
            .debounceTime(500)
            .map(val => this.dataService.getRootsByPrefixSearch(val));
    }

    ngOnDestroy() {
        if (this.browseSub) {
            this.browseSub.unsubscribe();
        }
    }

    public displayItem(item: RootAndIndex): string {
        if (!item) {
            return '';
        }
        return item.root.r.join(', ');
    }

    public navigateToSpecificRoot($event: MatAutocompleteSelectedEvent) {
        console.log($event.option.value);
    }
}
