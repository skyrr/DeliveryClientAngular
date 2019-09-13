import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EntryElement } from '../interfaces/EntryElement';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Description', 'IsExpense', 'Value', 'UserId']
  dataSource;
  constructor(private service:EntryService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[])
    })
  }

}
