import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Alphabet} from './alphabet';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public searchCtrl: FormControl;
    public browseCtrl: FormControl;
    public alphabet = Alphabet;

    private browseSub: Subscription;

    constructor(private router: Router) {
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

    }

    ngOnDestroy() {
        if (this.browseSub) {
            this.browseSub.unsubscribe();
        }
    }
}
