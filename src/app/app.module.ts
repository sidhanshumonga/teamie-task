import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { SortOptionsComponent } from './sort-options/sort-options.component';

// import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { MessageService } from './message.service';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    UsersGridComponent,
    SortOptionsComponent,
    DateFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [MessageService, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
