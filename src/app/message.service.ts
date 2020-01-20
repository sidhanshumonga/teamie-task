import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MessageService {
  sorting: any;
  dates: any;
  sortingChanged = new Subject<object>();
  datesChanged = new Subject<object>();

  constructor() { }

  updateSortOption(sortOption) {
    this.sorting = sortOption;
    this.sortingChanged.next(this.sorting);
  }

  getSortingOption(): Observable<any> {
    return this.sortingChanged.asObservable();
  }


  updateDates(dates) {
    this.dates = dates;
    this.datesChanged.next(this.dates);
  }

  getUpdatedDates(): Observable<any> {
    return this.datesChanged.asObservable();
  }
}
