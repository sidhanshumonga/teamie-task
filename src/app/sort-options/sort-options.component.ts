import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.scss']
})
export class SortOptionsComponent implements OnInit {

  constructor(private service: MessageService) { }

  ngOnInit() {
  }
  updateSorting(value) {
    this.service.updateSortOption(value);
  }
}
