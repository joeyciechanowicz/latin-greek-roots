import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {Root} from '../roots';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-browse-letter',
    templateUrl: './browse-letter.component.html',
    styleUrls: ['./browse-letter.component.css']
})
export class BrowseLetterComponent implements AfterViewInit, OnDestroy {
    public dataSource: MatTableDataSource<Root>;
    public columns = ['roots', 'meaning', 'originLanguage', 'examples'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    private sub: Subscription;

    constructor(private activatedRoute: ActivatedRoute, dataService: DataService) {

        this.sub = this.activatedRoute.params.subscribe(
            (params) => {
                const letter = params['letter'];
                this.dataSource = new MatTableDataSource(dataService.getByLetter(letter));
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
