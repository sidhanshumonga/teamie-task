import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.scss']
})
export class SortOptionsComponent implements OnInit {
  asc = true;
  preSort: string;
  constructor(private service: MessageService) { }

  ngOnInit() {
  }
  updateSorting(value) {
    this.service.updateSortOption(value, this.preSort !== value ? this.asc : !this.asc);
    this.asc = this.preSort !== value ? this.asc : !this.asc;
    this.preSort = value;
  }
}
