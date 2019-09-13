import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { EntryElement } from '../interfaces/EntryElement';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Description', 'IsExpense', 'Value']
  dataSource;
  constructor(private service:EntryService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[])
    })

  }

}
