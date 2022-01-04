import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface projectElement {
  id:number;
  name: string;
   activityArea: string;
   duration: string;
   financement: string;
   description: string;
}

const ELEMENT_DATA: projectElement[] = [
  {id: 1, name: 'Hydrogen', activityArea: 'azerty', duration: 'H',financement:'lol',description:"lorem ipsum"},
  {id: 2, name: 'Helium', activityArea: 'azerty', duration: 'He',financement:'lol',description:'lorem ipsum'},
  {id: 3, name: 'Lithium', activityArea: 'azerty', duration: 'Li',financement:'lol',description:'lorem ipsum'},
  {id: 4, name: 'Beryllium', activityArea: 'azerty', duration: 'Be',financement:'lol',description:'lorem ipsum'},
  {id: 5, name: 'Boron', activityArea: 'azerty', duration: 'B',financement:'lol',description:'lorem ipsum'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor() { }

  ngOnInit(): void {
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
